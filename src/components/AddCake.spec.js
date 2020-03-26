import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AddCake from './AddCake.js'

describe('cakes list', () => {
  let container = null
  let addCake = null
  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
    addCake = jest.fn()
  });

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it("should add a cake", () => {
    act(() => {
      render(<AddCake errors={[]} addCake={addCake}/>, container)
    })
    var header = document.querySelector("h2")
    expect(header.textContent).toBe("Add A Cake")

    var title = document.querySelector("#title")
    var description = document.querySelector("#description")
    var image = document.querySelector("#image")

    act(() => {
      setInputValue(title, cake.title)
      setInputValue(description, cake.description)
      setInputValue(image, cake.image)
    })

    var button = document.querySelector("#add-cake-button")
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })

    expect(addCake.mock.calls).toEqual([[cake]])
  })

  it("should display title error", () => {
    const error = {
      field: 'title',
      message: 'test-message'
    }
    act(() => {
      render(<AddCake errors={[error]} addCake={addCake}/>, container);
    })
    var errorElement = document.querySelector("#title-error")
    expect(errorElement.textContent).toEqual("Title test-message")
  })

  it("should display title error", () => {
    const error = {
      field: 'title',
      message: 'test-message'
    }
    act(() => {
      render(<AddCake errors={[error]} addCake={addCake}/>, container);
    })
    var errorElement = document.querySelector("#title-error")
    expect(errorElement.textContent).toEqual("Title test-message")
  })

  it("should display description error", () => {
    const error = {
      field: 'description',
      message: 'test-message'
    }
    act(() => {
      render(<AddCake errors={[error]} addCake={addCake}/>, container);
    })
    var errorElement = document.querySelector("#description-error")
    expect(errorElement.textContent).toEqual("Description test-message")
  })

  it("should display image error", () => {
    const error = {
      field: 'image',
      message: 'test-message'
    }
    act(() => {
      render(<AddCake errors={[error]} addCake={addCake}/>, container);
    })
    var errorElement = document.querySelector("#image-error")
    expect(errorElement.textContent).toEqual("Image test-message")
  })

  it("should display global error", () => {
    const error = {
      field: null,
      message: 'test-message'
    }
    act(() => {
      render(<AddCake errors={[error]} addCake={addCake}/>, container);
    })
    var errorElement = document.querySelector("#global-error")
    expect(errorElement.textContent).toEqual("Error adding cake: test-message")
  })

})

const cake ={
              title: 'Lemon Cheesecake',
              description: 'A cake made of lemons',
              image: 'http://example.com/lemon.jpg'
             }

// probably better done using Enzyme
const setInputValue = (input, value) => {
 var nativeSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
 nativeSet.call(input, value);
 input.dispatchEvent(new Event('input', {bubbles: true}));
}
