const reqTaker =(req,res)=>{
    
        if(req.url.toLowerCase()=='/'){
            res.setHeaders('Content-Type','text/html')
            res.write(
                    `<html >
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                    <body>
                        <ul>
                            <li><a href="calculator">Calculator</a></li>
                        </ul>
                    </body>
                    </html>`
                )
                return res.end();
            }else if(req.url == '/calculator' ){
                res.setHeader()
                res.write(`
                            <html>
                            <head>
                                <title>Simple Calculator</title>
                            </head>
                            <body>

                                <h2>Simple Addition Calculator</h2>
                            <form action="/calculator-result" method="POST">
                            
                                <input type="number" id="num1" placeholder="Enter first number">
                                <input type="number" id="num2" placeholder="Enter second number">
                                
                                <button onclick="calculateSum()">Sum</button>
                            </form>
                    

                                <h3 id="result"></h3>

                                <script>
                                    function calculateSum() {
                                        let number1 = parseFloat(document.getElementById("num1").value) || 0;
                                        let number2 = parseFloat(document.getElementById("num2").value) || 0;
                                        
                                        let sum = number1 + number2;
                                        
                                        document.getElementById("result").innerText = "Result: " + sum;
                                    }
                                </script>

                            </body>
                            </html>`)
                            return res.end()
                                }
        else if(req.url == ''){}
                    
            
}

module.exports = reqTaker;