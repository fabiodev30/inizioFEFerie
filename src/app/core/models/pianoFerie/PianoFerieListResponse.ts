import { PianoFerieDTO } from './PianoFerieDTO';

export interface PianoFerieListResponse {
    descrizioneEsito: string;
    pianoFerieDTOList: PianoFerieDTO[];
    statusCode: number;
}