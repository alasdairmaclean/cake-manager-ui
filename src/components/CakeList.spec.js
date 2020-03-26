import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CakeList from './CakeList.js'

describe('cakes list', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })

  it("renders with zero cakes", () => {
    act(() => {
      render(<CakeList cakes={[]} />, container);
    })
    var header = document.querySelector("h2");
    expect(header.textContent).toBe("Browse Cakes");
    var cakeDetails = document.querySelectorAll("div.cake-details");
    expect(cakeDetails.length).toBe(0);
  })

  it("renders with cakes", () => {
    act(() => {
      render(<CakeList cakes={cakes} />, container);
    })
    var cakeDetails = document.querySelectorAll("div.cake-details");
    expect(cakeDetails.length).toBe(2);

    var images = document.querySelectorAll("img.cake-image");
    expect(images.length).toBe(2);
    expect(images[0].src).toBe(cakes[0].image)
    expect(images[1].src).toBe(cakes[1].image)

    var titles = document.querySelectorAll("p.title");
    expect(titles.length).toBe(2);
    expect(titles[0].textContent).toBe(cakes[0].title)
    expect(titles[1].textContent).toBe(cakes[1].title)

    var descriptions = document.querySelectorAll("p.description");
    expect(descriptions.length).toBe(2);
    expect(descriptions[0].textContent).toBe(cakes[0].description)
    expect(descriptions[1].textContent).toBe(cakes[1].description)
  })

  it("renders error", () => {
      act(() => {
        render(<CakeList cakes={[]} error={true} />, container);
      })
      var errorMessage = document.querySelector("div.alert");
      expect(errorMessage.textContent).toBe("Error loading cakes - please contact support@example.com");
    })

})

const cakes = [{
                cakeId: 1,
                title: 'Lemon Cheesecake',
                description: 'A cake made of lemons',
                image: 'http://example.com/lemon.jpg'
              },
              {
                cakeId: 2,
                title: 'Victoria Sponge',
                description: 'A sponge cake',
                image: 'http://example.com/sponge.jpg'
              }]
