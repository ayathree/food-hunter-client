
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import CoverOrder from "./CoverOrder";
import { useState } from "react";
import useMenu from "../../hook/useMenu";
import TabLk from "../../components/TabLk";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Order = () => {
    const categories=['dessert','salad','soup','pizza']
    const{category}=useParams()
    const initialIndex = categories.indexOf(category)
    const[tabIndex, setTabIndex]=useState(initialIndex)
    const [menu]=useMenu()
    const dessert = menu.filter(item=>item.category==='dessert')
    const soup = menu.filter(item=>item.category==='soup')
    const salad = menu.filter(item=>item.category==='salad')
    const pizza = menu.filter(item=>item.category==='pizza')
   
    return (
        <div>
             <Helmet>
                <title>Food Hunter | Order</title>
            </Helmet>
           <div className="mb-20">
           <CoverOrder></CoverOrder>
           </div>
           <div className="mt-20 mb-20">
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>dessert</Tab>
    <Tab>salad</Tab>
    <Tab>soup</Tab>
    <Tab>pizza</Tab>
  </TabList>
  <TabPanel >
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
   {
        dessert.map(item=><TabLk key={item._id} item={item}></TabLk>)
    }
   </div>
   
  </TabPanel>
  <TabPanel>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
   {
        salad.map(item=><TabLk key={item._id} item={item}></TabLk>)
    }
   </div>
    
  </TabPanel>
  <TabPanel>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
   {
        soup.map(item=><TabLk key={item._id} item={item}></TabLk>)
    }
   </div>
  </TabPanel>
  <TabPanel>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
   {
        pizza.map(item=><TabLk key={item._id} item={item}></TabLk>)
    }
   </div>
  </TabPanel>


</Tabs>

           </div>
           
            


        </div>
    );
};

export default Order;