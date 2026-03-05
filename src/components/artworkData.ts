import untitled1Img from './images/Untitled.png';
import jamesDean from './images/jamesDean.jpg';
import mondays from './images/mondays.jpg';
import davidAndGoliath from './images/davidAndGoliath.jpg';
import materialStudy from './images/materialStudy.png';
import materialStudy2 from './images/materialStudy2.png';
import badMood from './images/badMood.png';
import motivationalSketch from './images/motivationalSketch.png';
import { StaticImageData } from 'next/image';

export interface ArtworkItem {
    id?: string;
    title: string;
    img: StaticImageData;
    medium: string;
    descr: string;
}

const artData: ArtworkItem[] = [
    {
        title: "Untitled",
        img: untitled1Img,
        medium: "acrylic - butcher paper",
        descr: "This piece uses typography and color as well as the natural effect of aging on materials to reflect on the inevitble end of relationships"
    },
    {
        title: 'Material Study 1',
        img: materialStudy,
        medium: 'newsprint - monoprint',
        descr: 'Material study of aged newsprint'
    },
    {
        title: 'Material Study 2',
        img: materialStudy2,
        medium: 'newsprint - monoprint - charcoal',
        descr: 'Material study on aged newsprint with gestural charcoal markings'
    },
    {
        title: 'James Dean',
        img: jamesDean,
        medium: 'cardboard - oil paint',
        descr: 'Symbolic cypher with oil paint on cardboard. A combination of materials that degrades quickly and permanently'
    },
    {
        title:'Material Study (BAD MOOD)',
        img: badMood,
        medium: 'newsprint - charcoal',
        descr: 'Material study on aged newsprint with gestural charcoal markings including the text "BAD MOOD"'
    },
    {
        title: 'Motivational Sketch',
        img: motivationalSketch,
        medium: 'newsprint - charcoal',
        descr: 'Sketch on newsprint reminding the viewer to stay positive'
    }
];

export default artData;