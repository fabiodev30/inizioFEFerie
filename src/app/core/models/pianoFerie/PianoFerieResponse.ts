import { PianoFerieDTO } from './PianoFerieDTO';

export interface PianoFerieResponse {
    descrizioneEsito: string;
    pianoFerieDTO: PianoFerieDTO;
    statusCode: number;
}