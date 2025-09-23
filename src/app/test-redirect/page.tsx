export default function TestRedirectPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Test Redirect Page</h1>
      <p>Testing different redirect methods:</p>
      
      <div style={{ margin: '20px 0' }}>
        <h2>Method 1: Direct Link</h2>
        <a 
          href="https://app.gohighlevel.com/location/boPxhNvcNB6T3F2CLP0M/page-builder/nWuS6gee27ffuHmp1R93"
          style={{ 
            display: 'inline-block',
            padding: '15px 30px',
            background: 'purple',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Direct Link to Go High Level
        </a>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Method 2: JavaScript Redirect</h2>
        <button 
          onClick={() => {
            window.location.href = 'https://app.gohighlevel.com/location/boPxhNvcNB6T3F2CLP0M/page-builder/nWuS6gee27ffuHmp1R93'
          }}
          style={{ 
            padding: '15px 30px',
            background: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          JavaScript window.location
        </button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Method 3: Window.open</h2>
        <button 
          onClick={() => {
            window.open('https://app.gohighlevel.com/location/boPxhNvcNB6T3F2CLP0M/page-builder/nWuS6gee27ffuHmp1R93', '_blank')
          }}
          style={{ 
            padding: '15px 30px',
            background: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Window.open in new tab
        </button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Method 4: Form Submit</h2>
        <form action="https://app.gohighlevel.com/location/boPxhNvcNB6T3F2CLP0M/page-builder/nWuS6gee27ffuHmp1R93" method="get">
          <button 
            type="submit"
            style={{ 
              padding: '15px 30px',
              background: 'orange',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Form Submit
          </button>
        </form>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: '#f0f0f0' }}>
        <p>URL we're trying to reach:</p>
        <code style={{ wordBreak: 'break-all' }}>
          https://app.gohighlevel.com/location/boPxhNvcNB6T3F2CLP0M/page-builder/nWuS6gee27ffuHmp1R93
        </code>
      </div>
    </div>
  )
}