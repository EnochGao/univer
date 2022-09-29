import { Component, createRef, IconComponent, JSXComponent, RefObject } from '@univer/base-component';
import { CanvasIcon } from '../CanvasIcon';

interface IProps {}
interface IState {}

class BorderDashDot extends Component<IProps, IState> {
    ref = createRef();

    drawLine(ref: RefObject<CanvasIcon>) {
        const canvas = ref.current! as unknown as HTMLCanvasElement;
        let ctx = canvas.getContext('2d')!;
        this.ref.current.setLineDash(ctx, 'DashDot', 'h', 0, 5, 100, 5);
        ctx.stroke();
        ctx.closePath();
    }

    render() {
        return <CanvasIcon ref={this.ref} width="100" height="10" drawLine={(dom) => this.drawLine(dom)} />;
    }
}

export class UniverBorderDashDot implements IconComponent {
    render(): JSXComponent<IProps> {
        return BorderDashDot;
    }
}

export default BorderDashDot;
