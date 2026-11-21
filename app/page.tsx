"use client"
import {useState, useEffect} from "react";

export default function Home() {
  const [item, setItem]=useState<any>('');
  const [itemList, setItemList]=useState<any>([]);
  const [editedId, setEditedId]=useState<any>();

  const handleChange = (e:any) =>{
    setItem(e.target.value)
  }
  const handleClick = () =>{
    let dataObject = {
      id: itemList.length + 1,
      value: item,
    }

    if(item){
      if(editedId){
        setItemList(itemList.map((data:any)=>data.id === editedId ? {...data, value:item}: data))
      }else{
        setItemList([...itemList, dataObject])
      }
    }
    setItem('');
    setEditedId(null)
  }

  const handleDelete = (id:any) =>{
    let newList = itemList.filter((data:any)=> data.id !== id)
    setItemList(newList)
  }
  const handleEdit = (id:any) =>{
    let newListIitem = itemList.find((data:any)=> data.id === id);
    console.log(newListIitem)
    setItem(newListIitem.value)
    setEditedId(newListIitem.id)

  }

  return (
    <div>
      <input type="text" value={item} onChange={handleChange}/>
      <button onClick={handleClick}>Submit</button>
      <ul>
        {itemList?.map((data:any)=>(
          <li key={data.id}>
            <div>
              {data.value}
              <button onClick={()=>handleDelete(data.id)}>Delete</button>
              <button onClick={()=>handleEdit(data.id)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
