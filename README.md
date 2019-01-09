# bookish-engine

## Why

A code challenge implemented with create-react-app

## Getting Up and Running

`yarn`

## Run Locally

`yarn start`

then browse to

## License

UNLICENSED

/\*

Welcome to our mini project!

There are no right or wrong answers, this is intended to discover your area of expertise
and where you're most comfortable working in our tech stack.

This exercise is intended to take an experienced React developer about an hour.

You can add additional files to this demoboard by using the Plus button above this tab
or just write everything inside this file. If you have trouble with demoboard,
feel free to use the online editor of your choice or email me a repo link.

Just start editing this file and click save to generate your own demoboard URL.
When you're done, copy and paste your demoboard URL back via email. Good luck!

---

We'll be turning this data structure of foods into an list of editable rows with React.

Data:
{
e5d9d9f5: {
label: 'ice cream',
isDelicious: true,
isHealthy: false,
},
a9ba692b: {
label: 'pizza',
isDelicious: true,
isHealthy: false,
},
ze128a47: {
label: 'spinach',
isDelicious: false,
isHealthy: true,
},
}

1. We want to create a list of these foods with checkboxes to toggle the
   isDelicious and isHealthy values. Each row should have the name of the food
   with two checkboxes to toggle isDelicious and isHealthy between true and false.

2. Data: Please use the data structure as it's provided. You can store the data in any
   manner (state, context, redux, mobx are all fine options). You should use some form
   of global state management so all of the data is accessible in one place after changes.

3. Rows with isDelicious = true should indent themselves 30px to the right.
   When isDelicious changes, the row should animate its position between baseline and indented.

4. Rows should use a gray background color by default.
   Rows with isHealthy = true should have a green background color.
   When isHealthy changes, the row should animate its background color between gray and green.

5. Bonus points:
   A. Use Styled Components for CSS - https://www.styled-components.com/
   Simply write: import styled from 'styled-components' in any demoboard tab to import.
   B. React hooks (you'll need to import react@next and react-dom@next)
   C. Add a button below the rows that console logs out all of the current food data

\*/

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(

  <div>
    :)
  </div>,
  document.getElementById('root')
)
