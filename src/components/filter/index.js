import React from 'react';
import * as d3 from 'd3';
import { Fab,Grid } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import  dataset from './dataset.csv';
var _ = require("underscore");
const { Parser } = require('json2csv');
var data,subset,result; //global object

//the convert function will convert csv to object and then format it (convert strings to numbers) 
 
const convert = (e, attackname)=>{

    d3.csv(dataset).then(function(dataset) {
        
        dataset.forEach(function(d){
            d.duration=+d.duration;
            d.src_bytes=+d.src_bytes;
            d.dst_bytes=+d.dst_bytes;
            d.land=+d.land;
            d.wrong_fragment=+d.wrong_fragment;
            d.urgent=+d.urgent;
            d.hot=+d.hot;
            d.num_failed_logins=+d.num_failed_logins
            d.logged_in=+d.logged_in;
            d.num_compromised=+d.num_compromised;
            d.root_shell=+d.root_shell
            d.su_attempted=+d.su_attempted
            d.num_root=+d.num_root
            d.num_file_creations=+d.num_file_creations
            d.num_shells=+d.num_shells
            d.num_access_files=+d.num_access_files
            d.num_outbound_cmds=+d.num_outbound_cmds
            d.is_host_login=+d.is_host_login
            d.is_guest_login=+d.is_guest_login
            d.count=+d.count
            d.srv_count=+d.srv_count
            d.serror_rate=+d.serror_rate
            d.srv_serror_rate=+d.srv_serror_rate
            d.rerror_rate=+d.rerror_rate
            d.srv_rerror_rate=+d.srv_rerror_rate
            d.same_srv_rate=+d.same_srv_rate
            d.diff_srv_rate=+d.diff_srv_rate
            d.srv_diff_host_rate=+d.srv_diff_host_rate
            d.dst_host_count=+d.dst_host_count
            d.dst_host_srv_count=+d.dst_host_srv_count
            d.dst_host_same_srv_rate=+d.dst_host_same_srv_rate
            d.dst_host_diff_srv_rate=+d.dst_host_diff_srv_rate
            d.dst_host_same_src_port_rate=+d.dst_host_same_src_port_rate
            d.dst_host_srv_diff_host_rate=+d.dst_host_srv_diff_host_rate
            d.dst_host_serror_rate=+d.dst_host_serror_rate
            d.dst_host_srv_serror_rate=+d.dst_host_srv_serror_rate
            d.dst_host_rerror_rate=+d.dst_host_rerror_rate
            d.dst_host_srv_rerror_rate=+d.dst_host_srv_rerror_rate            
            d.level=+d.level;
        })
        //end of for each
        
        data=dataset;   //copying the formatted data to variable data.
        map(attackname);

    }).catch(function(err) {
        throw err;
    })
   }
// map function does the filtering of the dataset and stores it in: result.
 const map = (attackname) => {
    result = _.where(data, {attack:attackname});
    slice();
  }
  
  

//The slice function will slice the array of object from random startig position to fixed size
const slice = ()=>{
        var max=result.length-200;
        var min=1;
        var random = Math.floor(Math.random() * (max - min) ) + min;
        
        subset = result.slice(random,random+200);
        
                                //subset now contains object to be parsed into csv file and then send.
        parse();
}


const parse=()=>{
    const fields = [
        "duration",
       "protocol_type",
        "service",
        "flag",
        "src_bytes",
        "dst_bytes",
        "land",
        "wrong_fragment",
        "urgent",
        "hot",
        "num_failed_logins",
        "logged_in",
        "num_compromised",
        "root_shell",
        "su_attempted",
        "num_root",
        "num_file_creations",
        "num_shells",
        "num_access_files",
        "num_outbound_cmds",
        "is_host_login",
        "is_guest_login",
        "count",
        "srv_count",
        "serror_rate",
        "srv_serror_rate",
        "rerror_rate",
        "srv_rerror_rate",
        "same_srv_rate",
        "diff_srv_rate",
        "srv_diff_host_rate",
        "dst_host_count",
        "dst_host_srv_count",
        "dst_host_same_srv_rate",
        "dst_host_diff_srv_rate",
        "dst_host_same_src_port_rate",
        "dst_host_srv_diff_host_rate",
        "dst_host_serror_rate",
        "dst_host_srv_serror_rate",
        "dst_host_rerror_rate",
        "dst_host_srv_rerror_rate",
        "attack",
        "level"
        ];
        
        const json2csvParser = new Parser({ fields });
        const subsetcsv = json2csvParser.parse(subset);
        
    console.log(subset);
     // now subset contains json format and csv contains subsetcsv format.
       
}


const Filter = () => {
   
    return (
        <div> 
            <div style={{paddingTop:"200px", textAlign:"center", fontSize:'40px', fontFamily:'Righteous', color:'#0099cc'}}> Select attack to simulate: </div>
        <div style={{margin:"100px 200px"}}>
           
             <Grid container spacing={3}>
            <Grid item xs={3}>
                <Fab variant="extended" onClick={(e)=>convert(e,"neptune")} >
                    <NavigationIcon  />
                    Neptune
                </Fab>
            </Grid>
            <Grid item xs={3}>
                <Fab variant="extended" onClick={(e)=>convert(e,"guess_passwd")}>                   {/*fab stands for floating action buttons*/}
                    <NavigationIcon  />                                                     
                    guess_passwd
                </Fab>
            </Grid>

            <Grid item xs={3}>
                <Fab variant="extended" onClick={(e)=>convert(e,"satan")} >
                    <NavigationIcon  />
                   satan
                </Fab>
            </Grid>
            <Grid item xs={3}>
                <Fab variant="extended" onClick={(e)=>convert(e,"normal")}>
                    <NavigationIcon  />
                    normal
                </Fab>
            </Grid>  
            </Grid>
            </div>
            <a href='http://localhost:3000/result' style={{color:'black'}} >result page</a>
        </div>
    );
};

export default Filter;