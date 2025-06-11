import Link from 'next/link'

function AiChipp() {

    return (
        <div className='z-50 fixed'>
            <script>
                window.CHIPP_APP_URL = "https://tylersassistant-10000218.chipp.ai";
                window.CHIPP_APP_ID = 10000218;
            </script>
            <Link rel="stylesheet" href="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css" />
            <script defer src="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js" />
        </div>
    )
}

export default AiChipp