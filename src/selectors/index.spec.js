import * as selectors from './index'

const state = {
      cakes: {
        cakes: [{
          cakeId: 1,
          title: 'Lemon Cheesecake',
          description: 'A cake made of lemons',
          image: 'http://example.com/image.jpg'
        }],
        getCakesError: true,
        addCakeErrors: [{
          field: 'title',
          message: 'length must be between 1 and 100'
        }]
      }
    }

describe('cakes selectors', () => {
  it('selectCakes should return cakes list', () => {
    expect(selectors.selectCakes(state)).toEqual(state.cakes.cakes)
  })

  it('selectGetCakesError should return error', () => {
    expect(selectors.selectGetCakesError(state)).toEqual(true)
  })

  it('selectAddCakeErrors should return errors', () => {
    expect(selectors.selectAddCakeErrors(state)).toEqual(state.cakes.addCakeErrors)
  })

})
