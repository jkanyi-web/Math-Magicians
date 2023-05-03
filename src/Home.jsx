/** @format */
export default function Home() {
  const divStyle = {
    width: '100vw',
    height: '100vh',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: '-150px',
  };

  const pStyle = {
    marginBottom: '30px',
  };

  return (
    <div style={divStyle}>
      <h3
        style={pStyle}>
        Welcome to our page!
      </h3>
      <p
        style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic
        voluptate praesentium blanditiis delectus cupiditate doloribus ab iure
        vitae, consequatur perferendis harum? Facere recusandae, illum
        exercitationem iusto nisi dicta eum.
      </p>
      <p
        style={{
          marginBottom: '20px',
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, hic
        voluptate praesentium blanditiis delectus cupiditate doloribus ab iure
        vitae, consequatur perferendis harum? Facere recusandae, illum
        exercitationem iusto nisi dicta eum.
      </p>
    </div>
  );
}
