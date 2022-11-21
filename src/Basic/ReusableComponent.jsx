import React from "react"
import Data from "./Data"
import Skill from "./Skill"
const ReusableComponent = () => {
    const [skill, setSkill] = React.useState(Data)
    const allCategory = [...new Set(Data.map((curElem) => ({i: curElem.icon,c:curElem.category})))]

    var resArr = [];
    Data.forEach(function(item){
        var i = resArr.findIndex(x => x.category == item.category);
        var j = resArr.findIndex(y => y.icon == item.icon);
        if(i <= -1 || j <= -1){
          resArr.push({id: item.id, category: item.category, icon:item.icon});
        }
      });
      console.log(resArr);
    
    return (
        <>
        <table border={{border:'1px solid grey'}}>
            <thead>
                <tr>
                    <th>Skill</th>
                    <th>Icon</th>
                </tr>
            </thead>
            {
                resArr.map((item, index) => {
                    return (
                        <Skill  key={index} data={item}/>
                    )
                })
            }
            
        </table>
           

        </>
    )
}

export default ReusableComponent