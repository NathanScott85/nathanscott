import { ISVG } from '../../components/img/svg';

export interface IComponentProps {
    className?: string;
    componentType?: string;
    currentComponent: string;
}

export type SVG = {
    id: string;
    SVG: React.FunctionComponent<ISVG>;
    name: string;
};
