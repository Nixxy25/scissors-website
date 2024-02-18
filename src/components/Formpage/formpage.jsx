const FormPage = () => {
  return (
    <div>
        <div>
            <div><input type="text" value="Paste Url here"></input></div>

            <div>
                <input type="text" value="Choose Domain"></input>
                <input type="text" value="Type Alias here"></input>
            </div>

            <div><button type="button">Trim URL</button></div>

            <div>
                By clicking TrimURL, I agree to the <span>Terms of Service,Privacy Policy</span>and Use of Cookies.
            </div>
        </div>
    </div>
  )
}

export default FormPage;