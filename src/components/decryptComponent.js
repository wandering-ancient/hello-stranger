import React from "react"
import PropTypes from "prop-types"
import CryptoJS from "crypto-js"


const DecryptComponent = ({ data }) => {
  const search = typeof window !== 'undefined' ? window.location.search : '';
  console.log('search: ', search)
  const params = new URLSearchParams(search)

  if (!search || !params.has("key")) {
    return <p>Welcome Stranger, how did you wander here?</p>
  }

  const key = params.get("key")

  try {
    const bytes  = CryptoJS.AES.decrypt(data, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    return <div dangerouslySetInnerHTML={{ __html: originalText }} ></div>

  } catch(error) {
    return <p>Welcome Stranger, what are you doing?</p>
  }
  }

DecryptComponent.propTypes = {
  search: PropTypes.object,
  data: PropTypes.string,
}

export default DecryptComponent
