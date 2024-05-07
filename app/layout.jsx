//react component
//pagesrendeed on server unless we put use client
//server side give better seo
//use rafce short hand for creating componets 
import React from 'react'
import '@/assets/styles/globals.css';

export const metatdata = {
    title: 'PropertyKai | Find The Perfect Rental', 
    description: 'Find your dream rental Property',
    keywords: 'rental find rentals, manage property'
};
const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div>{children}</div>
        </body>
    </html>
    
  );
};

export default MainLayout;