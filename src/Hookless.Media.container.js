import React from 'react';
import Media from './Hookless.Media.component'

// dramatic indentation
class MediaHookless extends React.Component {
  render() {
    return (
        <Media query="(max-width: 400px)">
            {
                small => (
                    <Media query="(min-width: 800px)">
                        {
                            large => (
                                <div className='media'>
                                    <h1>Media Component without Hookless</h1>
                                    <p>
                                        Small ? {small ? 'YEP' : 'NOPE'}
                                    </p>
                                    <p>
                                        Large ? {large ? 'YEP' : 'NOPE'}
                                    </p>
                                </div>
                            )  
                        }
                    </Media>
                )
            }
        </Media>
    );
  }
}



export default MediaHookless;
