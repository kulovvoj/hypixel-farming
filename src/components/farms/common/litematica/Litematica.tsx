import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Litematica() {
  return (
    <div className='section litematica'>
      <div>
        <h2>Litematica</h2>
        <p>
          Litematica is a{' '}
          <a href='https://fabricmc.net/' target='_blank'>
            Fabric
          </a>{' '}
          mod designed to have a template while building. You simply import a schematic, import it, and then you can
          freely build.
        </p>
        <p>
          There are many tutorials on how to use Litematica, but if you're not up to searching, you may want to check
          out{' '}
          <a href='https://www.youtube.com/watch?v=aRaqyKPRWQE' target='_blank'>
            this&nbsp;youtube&nbsp;video
          </a>{' '}
          which teaches you the basics.
        </p>
        <p>
          You can download Litematica on{' '}
          <a href='https://www.curseforge.com/minecraft/mc-mods/litematica' target='_blank'>
            Curse&nbsp;Forge
          </a>
          .
        </p>
        <Alert variant='info'>
          All schematics were copied on Minecraft 1.21. Importing the schematics on earlier versions of Minecraft is not
          guaranteed to work.
        </Alert>
      </div>
    </div>
  )
}
