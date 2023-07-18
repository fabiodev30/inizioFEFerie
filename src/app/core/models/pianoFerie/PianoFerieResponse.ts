import { PianoFerieDTO } from './PianoFerieDTO';

export interface PianoFerieResponse {
    descrizioneEsito: string;
    pianoFerieDTOList: PianoFerieDTO[];
    statusCode: number;
}