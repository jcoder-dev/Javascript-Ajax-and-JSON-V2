<?php
        
          

        
            $myData =$_GET["data"] ;
            var_dump($myData);
            $myFile = "todo.json";
            if(file_exists($myFile))
            {
                    $fileHandle = fopen($myFile, "w");
                    fwrite($fileHandle, $myData);
                    fclose($fileHandle);
            }
           
       
    