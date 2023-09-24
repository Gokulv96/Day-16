const output = document.createElement('h1');

output.innerText = setTimeout(()=>{
           output.innerText="10";
      setTimeout(()=>{
        output.innerText="9";
       setTimeout(()=>{
        output.innerText="8";
        setTimeout(()=>{
            output.innerText="7";
           setTimeout(()=>{
            output.innerText="6";
               setTimeout(()=>{
                output.innerText="5";
                   setTimeout(()=>{
                    output.innerText="4";
                       setTimeout(()=>{
                        output.innerText="3";
                           setTimeout(()=>{
                            output.innerText="2";
                               setTimeout(()=>{
                                output.innerText= "1";
                                   setTimeout(()=>{
                                    output.innerText="Happy Independence Day!!!";
                                   },1000);
                               },1000);
                           },1000);
                       },1000);
                   },1000);
               },1000);
           },1000);
        },1000);
       },1000);
      },1000)
   },);

document.body.append(output);