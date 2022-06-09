import '../css/mpage.css'

//MPageSplash returns a div explaining what the MPage is for and how to navigate it.

const MPageSplash = () => {
    return (
        <div className='splashPageWrapper'>
            <div className='boxWrapper'>
                <p>This is the admin page. Use the sidebar to navigate through various functions.</p>
                <p><b>Inventory Modification</b> will allow you to change item prices, descriptions, digital format availability, etc. All changes are committed to the database.</p>
                <p><b>Sales Data</b> displays various metrics regarding product sales.</p>
            </div>
        </div>
    )
}

export {
    MPageSplash,
}