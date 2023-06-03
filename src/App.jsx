import "./App.css"

export function App () {
return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar" 
            src="https://caracoltv.brightspotcdn.com/dims4/default/22a7f4c/2147483647/strip/true/crop/1280x1126+0+0/resize/1000x880!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fd1%2F58%2Feb6c2ed64542b9fb96b48ff577bd%2F02d62f55-843a-467c-869e-4c0af07d2587.png" 
            alt = "El avatar"/>
            <div className="tw-followCard-info">
                <strong>Bizarrap</strong>
                <span
                className="tw-followCard-infoUserName">@Bizarrap</span>
            </div>
        </header>
        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}