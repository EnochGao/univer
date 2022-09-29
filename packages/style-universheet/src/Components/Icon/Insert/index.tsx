import { BaseIconProps, FunctionComponent, IconComponent } from '@univer/base-component';
import { Icon } from '../AddIcon';

const PhotoIcon = (props: BaseIconProps) => (
    <Icon spin={props.spin} rotate={props.rotate} name="foward" style={props.style}>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8090" width="1em" height="1em" fill="currentColor">
            <path
                d="M810.666667 213.333333v597.333334H213.333333V213.333333h597.333334z m-42.666667 263.381334l-233.984 190.890666-118.613333-98.218666L256 704.64V768h512v-291.285333zM768 256H256v392.704l159.146667-134.954667 119.04 98.602667L768 421.674667V256zM384 341.333333a42.666667 42.666667 0 1 1 0 85.333334 42.666667 42.666667 0 0 1 0-85.333334z"
                p-id="8091"
            ></path>
        </svg>
    </Icon>
);

const LinkIcon = (props: BaseIconProps) => (
    <Icon spin={props.spin} rotate={props.rotate} name="foward" style={props.style}>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7962" width="1em" height="1em" fill="currentColor">
            <path
                d="M771.584 251.733333c-49.066667-51.2-132.266667-51.2-181.333333 0l-74.666667 76.8c-8.533333 8.533333-8.533333 23.466667 0 32 8.533333 8.533333 21.333333 8.533333 29.866667 0l74.666666-76.8c34.133333-34.133333 87.466667-34.133333 121.6 0 34.133333 34.133333 34.133333 89.6 0 123.733334l-121.6 123.733333c-34.133333 34.133333-87.466667 34.133333-121.6 0-8.533333-8.533333-21.333333-8.533333-29.866666 0-8.533333 8.533333-8.533333 23.466667 0 32 49.066667 51.2 132.266667 51.2 181.333333 0l121.6-123.733333c51.2-53.333333 51.2-136.533333 0-187.733334z"
                p-id="7963"
            ></path>
            <path
                d="M477.184 663.466667l-74.666667 76.8c-34.133333 34.133333-87.466667 34.133333-121.6 0-34.133333-34.133333-34.133333-89.6 0-123.733334l121.6-123.733333c34.133333-34.133333 87.466667-34.133333 121.6 0 8.533333 8.533333 21.333333 8.533333 29.866667 0 8.533333-8.533333 8.533333-23.466667 0-32-49.066667-51.2-132.266667-51.2-181.333333 0l-121.6 123.733333c-51.2 51.2-49.066667 134.4 0 185.6 49.066667 51.2 132.266667 51.2 181.333333 0l74.666667-76.8c8.533333-8.533333 8.533333-23.466667 0-32-8.533333-6.4-21.333333-6.4-29.866667 2.133334z"
                p-id="7964"
            ></path>
        </svg>
    </Icon>
);

const ChartIcon = (props: BaseIconProps) => (
    <Icon spin={props.spin} rotate={props.rotate} name="foward" style={props.style}>
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7833" width="1em" height="1em" fill="currentColor">
            <path d="M256 213.333333H213.333333v597.333334h597.333334v-42.666667H256z" p-id="7834"></path>
            <path
                d="M490.666667 343.466667V554.666667h185.6c-19.2 72.533333-85.333333 128-164.266667 128-93.866667 0-170.666667-76.8-170.666667-170.666667 0-87.466667 66.133333-157.866667 149.333334-168.533333M512 298.666667c-117.333333 0-213.333333 96-213.333333 213.333333s96 213.333333 213.333333 213.333333 213.333333-96 213.333333-213.333333h-192V298.666667H512z"
                p-id="7835"
            ></path>
            <path
                d="M618.666667 260.266667c83.2 14.933333 134.4 74.666667 147.2 166.4H618.666667V260.266667m-42.666667-46.933334v256H810.666667c0-149.333333-85.333333-256-234.666667-256z"
                p-id="7836"
            ></path>
        </svg>
    </Icon>
);

export default {
    PhotoIcon,
    LinkIcon,
    ChartIcon,
};

export class UniverPhotoIcon implements IconComponent {
    render(): FunctionComponent<BaseIconProps> {
        return PhotoIcon;
    }
}
export class UniverLinkIcon implements IconComponent {
    render(): FunctionComponent<BaseIconProps> {
        return LinkIcon;
    }
}
export class UniverChartIcon implements IconComponent {
    render(): FunctionComponent<BaseIconProps> {
        return ChartIcon;
    }
}
