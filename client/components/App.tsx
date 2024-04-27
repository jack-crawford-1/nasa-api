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

  // const DummyImage = <img src="https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg" alt="dummy img" />

  console.log(data)

  return (
    <div className="nasa-image-container">
      <h1>NASA Image Of The Day</h1>
      <p>{data.title}</p>
      <img src={data?.hdurl} alt="Nasa" />
      <p>{new Date(data.date).toLocaleDateString()}</p>
      <p>Image by: {data?.copyright}</p>
      <p>{data?.explanation}</p>
      {/* {DummyImage} */}
    </div>
  )
}

export default App
