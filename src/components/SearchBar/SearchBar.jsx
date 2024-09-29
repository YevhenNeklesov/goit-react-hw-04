

import { Formik, Form, Field} from 'formik'

const SearchBar = ({ setQuery }) => {
    const initialValues = {
        query: '',
    }
    const handleSubmit = values => {
        console.log(values);
        setQuery(values.query)
    }
  return (
      <div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                  <Field
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                      name='query' />
                  <button type='submit'>Search</button>
              </Form>
          </Formik>
    </div>
  )
}

export default SearchBar