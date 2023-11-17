# <Password-Generator>

## Description

This project is a simple webpage that the user can interact with to generate a simple password. It accepts multiple combinations of character types and lengths and displays the final combination to the user. This project was built to demonstrate and develop my javaScript skills.

While creating this project I encountered multiple challenges, mostly relating to implemnting the logic. 
I created a logic chart to map out all of the possible combinations then tried to use "if..else" loops to iterate through. I could not quite get that to work so after some research came across the switch/case method. I had written most of that out and was testing when I came across a simpler solution. I was trying to create a single variable to store all the selected character sets. So all I had to do was for each prompt, validate if it was true or false, then combine it to the existing character set. This method erased over 100 lines of code and massively simplified the logic tree.

## Usage

    To use this site, simply click the "Generate Password" button. Prompts will appear to get the composition of the password. If no prompts are selected, or the length is not within the range, the promts will error and alert the user.

## Preview

![a picture of the finished password-generator window with a sample password generated.](assets/images/password-generator.png)
   

## License

MIT License

Copyright (c) [2023] [Jeffrey Scott]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---