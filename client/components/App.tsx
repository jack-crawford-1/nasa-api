import { useQuery } from '@tanstack/react-query'
import { getNasaImages } from '../apis/nasa'

function App() {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['nasa'],
    queryFn: () => getNasaImages(),
  })
  if (isError) {
    console.log(error)
    return <p>Something went wrong</p>
  }

  if (isLoading) {
    return <p>Loading ...</p>
  }

  if (!data) {
    return <p>No data found</p>
  }

  console.log(data)

  return (
    <>
      <div className="outer-container">
        <h1>
          Image of the Day from the{' '}
          <span>
            <img src="nasa-logo.png" alt="" />
          </span>
          API
        </h1>
        <div className="main-container">
          <div className="main-left-container">
            <h2>{data.title}</h2>
            <p>{new Date(data.date).toLocaleDateString()}</p>
            <h3>Image by: {data?.copyright}</h3>
            <p>{data?.explanation}</p>
          </div>
          <div className="main-right-container">
            <img src={data?.hdurl} alt="Nasa" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
