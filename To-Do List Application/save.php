<?php
        
          

        
            $myData =$_GET["data"] ;
            
            $myFile = "todo.json";
            if(file_exists($myFile))
            {
                 $fileHandle = fopen($myFile, "w");
            fwrite($fileHandle, $myData);
            fclose($fileHandle);
            }
           
       
    