import React from 'react'

export default function Forms ({teamMembers, values}) {
    return (
        <div>
            <form>
        <label>
            Name:
            <input
            type='text'
          />
        </label> <br />

        <label>
          Email:
          <input
            type='text'
          />
        </label> <br />

        <label>
          Role:
          <input
            type='text'
          />
        </label> <br />

        <button>Submit</button>
      </form>

            
        </div>
    )
}