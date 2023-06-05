import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: 'Bizarrap',
        name: 'Bizarrap',
        isFollowing: false,
    },
    {
        userName: 'Indie5051',
        name: 'Indie 505 ',
        isFollowing: false,
    },
    {
        userName: 'MrAngeloValdes',
        name: 'Will',
        isFollowing: false,
    },    {
        userName: 'Messismo10',
        name: 'Messismo',
        isFollowing: false,
    }
]

export function App () {
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard> 
                ))
            }
        </section>
    )
}
