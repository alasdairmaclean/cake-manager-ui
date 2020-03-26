import React from 'react'

class Add extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    this.globalError = this.props.errors.find(e => !e.field)
    this.titleError = this.props.errors.find(e => e.field === 'title')
    this.descriptionError = this.props.errors.find(e => e.field === 'description')
    this.imageError = this.props.errors.find(e => e.field === 'image')
    return(
      <div className="row" style={{maxWidth: '720px'}}>
        <div className="col-sm">
          <h2>Add A Cake</h2>
          <form>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" id="title"
                       placeholder="Enter title e.g. Lemon Cheesecake"
                       value={this.state.title} onChange={this.handleChange}
                        maxLength="100" />
            </div>
            { this.titleError && <div id="title-error" className="alert alert-danger" role="alert">
                    Title {this.titleError.message}
              </div>
            }
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" id="description"
                       placeholder="Enter description e.g. A cake made from lemons"
                       value={this.state.description} onChange={this.handleChange}
                        maxLength="100"/>
            </div>
            { this.descriptionError && <div id="description-error" className="alert alert-danger" role="alert">
                    Description {this.descriptionError.message}
              </div>
            }
            <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input type="text" className="form-control" id="image"
                       placeholder="Enter image URL e.g. http://example.com/image.jpg"
                       value={this.state.image} onChange={this.handleChange}
                        maxLength="300"/>
            </div>
            { this.imageError && <div id="image-error" className="alert alert-danger" role="alert">
                    Image {this.imageError.message}
              </div>
            }
            <button id="add-cake-button" type="button" className="btn btn-primary" onClick={() => this.props.addCake(this.state)}>Add Cake</button>
            { this.globalError && <div id="global-error" className="alert alert-danger" role="alert">
                    Error adding cake: {this.globalError.message}
              </div>
            }
          </form>
        </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }
}

export default Add
