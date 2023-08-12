import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SelectRegion from "../components/SelectRegion.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SelectBox">
                <SelectRegion/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews