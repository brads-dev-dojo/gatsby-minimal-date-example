import * as React from "react"
import {v4 as uuid} from 'uuid';

const IndexPage = () => {
    const siteCreationDate = new Date().toLocaleDateString('de-CH')
    const universallyUniqueIdentifier = uuid()

    return (
        <main>
            <title>Gatsby: Minimal Date Example</title>
            <p>Creation date of the site: {siteCreationDate}</p>
            <p>UUID: {universallyUniqueIdentifier}</p>
        </main>
    )
}

export default IndexPage
