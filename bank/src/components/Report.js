import React, { Component, PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Example2 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    findVendor = () => {
       let vendorList = {}
       this.props.data.map(m => vendorList[m.vendor] ? null : vendorList[m.vendor] = 0)
       this.props.data.forEach(m => vendorList[m.vendor]+= m.amount )
       return vendorList
    }

    findHottestVendor = (vendor) => {
        const arr = []
        let highest = Object.values(vendor).sort(function (a, b) { return b - a })
        const highestVendor = highest
        let keysSorted = Object.keys(vendor).sort(function (a, b) { return vendor[b] - vendor[a] })
        const topVendor = keysSorted
        let i = 0
        while (i < highestVendor.length) {
            arr[i] = { name: topVendor[i], pv: highestVendor[i] }
            i++
        }
        return arr
        }
   
    render() {
        let vendories = this.findVendor()
        let vendor = this.findHottestVendor(vendories)
        return (
            <div className='chart'>
                <BarChart
                    width={660}
                    height={160}
                    data={vendor}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" fill=" rgba(219, 86, 208, 0.418)" />
                </BarChart>
            </div>
        );
    }
}


export default Example2








 

   

