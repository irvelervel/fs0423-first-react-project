const Footer = () => {
  return (
    // REACT FRAGMENT
    // lo potete mettere quando dovete da un componente ritornare un singolo parent
    // ma non volete che sia un div
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>EPICODE - All Rights Reserved</div>
        <div>Current Batch: FS0423</div>
      </div>
      <p>2023</p>
    </>
  )
}

export default Footer
// esporto il componente Footer (come default) in modo da poterlo importare in App
