import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Pagination } from "./Pagination.js";

test('render contents', () => {
    const postsPerPage = 15
    const totalPosts = 120
        
    const component = render(<Pagination postsPerPage={postsPerPage} totalPosts={totalPosts}/>)

    component.container.querySelector('button')
    component.container.querySelector('ul')
})

test('clicking the button calls paginate', () => {
    const postsPerPage = 15
    const totalPosts = 120

    const mockHandler = jest.fn()
        
    const component = render(<Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={mockHandler}/>)
   
    const button = component.getByText('1')
    fireEvent.click(button)
    
    expect(mockHandler.mock.calls).toHaveLength(1)
})
