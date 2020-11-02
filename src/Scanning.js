import React, { Component } from "react";

import axios from 'axios';


class Scanning extends Component {
  constructor(props) {
    super(props);


let wordsarray = [];
let fileUploaded = false;
  
  
function handelfiles(files){
if(window.FileReader){
  getAstext(files[0]);
  fileUploaded = true;
} else {
  alert('FileReader not supported in browser');
}
}

function getAstext(fileToRead){

let reader = new FileReader();

reader.onload = loadHandeler;
reader.onerror = errorHandeler;

}

function loadHandeler(event){
 let txt = event.target.result;
 processData(txt);
}


function errorHandeler(evt){
  if(evt.target.error.name ==  " Not Readableerror"){
  alert('Can not read file');
  }
}


function owen(files){
  if(window.FileReader){
    getAstext(files[0]);
    fileUploaded = true;
  } else {
    alert('FileReader not supported in browser');
  }
  }

function processData(txt){
  let alltextLines = txt.split(/\r\n|\n/);

  for (let i = 0; i < alltextLines.length; i++){

    let row = alltextLines[i].split(',');

    let col =[];

    for (let j = 0; j < row.length; j++){
      col.push(row[j])
    }

    wordsarray.push(col);
    

  }



}


}


  render() {

    
    return (
      
      <div>
        <input type="file" accept=".txt" onChange={e => 
            this.handelfiles(e.target.files[0])} />

       <textarea type="file"  id= {wordsarray} />
       
      </div>
    );
  }
}


    export default Scanning;