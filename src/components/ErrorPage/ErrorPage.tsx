import type { FC } from "react";
import { Card } from "../Card";
import { ButtonPrimary } from "../ButtonPrimary";
import HttpError500Imagen from '@/assets/images/http500-error.png';


export interface ErrorPageProps {
    message: string;
    code: string;
    timestamp: string;
    presentation: string;
    title: string;
    buttonLabel: string;
    onClickErrorPresentation: (buttonLabel: string) => void;
}

export const ErrorPage: FC<ErrorPageProps> = ({ buttonLabel, message, onClickErrorPresentation }) => {

    const onClickErrorPage = () => {
        onClickErrorPresentation(buttonLabel);
    }

    return (
        <Card className="max-w-200">
            <div className="grid justify-center text-center">
                <img src={HttpError500Imagen} className="mb-10 h-80" alt="servidor caricatura con error 500" />
                <div className="mb-5">{message}</div>
                <ButtonPrimary isLoading={false} onClick={onClickErrorPage}>
                    {buttonLabel}
                </ButtonPrimary>
            </div>
        </Card>
    );
};

