import { ReactNode } from 'react';
interface IconComponentProps {
    icon: ReactNode;
}

const IconComponent = ({ icon }: IconComponentProps) => {
    return (
        <div>
            {icon}
        </div>
    );
};

export default IconComponent;