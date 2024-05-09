import styled from 'styled-components'; 



export const Button = styled.div` 
position: fixed; 
width: 100%; 
left: 95%; 
bottom: 40px; 
height: 20px; 
font-size: 3rem; 
z-index: 100; 
cursor: pointer; 
color: #D16E43; 

@media (max-width: 425px) {
    left: 90%; /* Adjust position for smaller screens */
    bottom: 20px; /* Adjust position for smaller screens */
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`

