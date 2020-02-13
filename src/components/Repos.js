import React from "react"

export const Repos = ({ repos }) => (
  <>
    {repos.map(repo => (
      <div className="card mb-2" key={repo.id}>
        <div className="card-body">
          <h6>
            <a href={repo.html_url} rel="noopener noreferrer" target="_blank">
              {repo.name}
            </a>
          </h6>
        </div>
      </div>
    ))}
  </>
)