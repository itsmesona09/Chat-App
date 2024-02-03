import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh', margin: 0, padding: 0 }}>
            <PrettyChatWindow
                projectId='1b8ca17f-1ab6-481d-8c46-2f6bd3d905d2'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }} />
        </div>
    );
};
export default ChatsPage;