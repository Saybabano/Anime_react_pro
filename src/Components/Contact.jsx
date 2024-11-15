import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Overlay for better text visibility */}
      <div style={styles.content}>
        <img 
          src='https://m.media-amazon.com/images/I/71eF0s6Zx5L.jpg' 
          alt='Contact' 
          style={styles.image}
        />
        <h1 style={styles.heading}>Contact Me</h1>
        <form style={styles.form}>
          <div style={styles.inputContainer}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={styles.input} 
              aria-label="Your Name"
            />
          </div>
          <div style={styles.inputContainer}>
            <input 
              type="email" 
              placeholder="Your Email" 
              style={styles.input} 
              aria-label="Your Email"
            />
          </div>
          <div style={styles.inputContainer}>
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              style={styles.textarea}
              aria-label="Your Message"
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    minHeight: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(https://s.cafebazaar.ir/images/icons/com.anime.wallpaperhd-5cde4f36-e7c3-48e3-b6dc-7744308a31ea_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
   
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  content: {
    marginTop:'2rem',
    position: 'relative',
    maxWidth: '500px',
    width: '100%',
    hight:'300px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Set semi-transparent white background
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
    backdropFilter: 'blur(10px)', // Adds a blur effect for a more stylish look
    marginBottom:'2rem'
  },
  image: {
    width: '100%',
    maxHeight: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgb(11, 212, 247)',
    color: 'black',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Contact;
