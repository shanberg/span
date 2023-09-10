import * as React from "react";
import { createRoot } from "react-dom/client";
import "./font.css";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  ChakraProvider,
  Center,
  Tbody,
  VStack,
  Divider,
  Box,
  useDisclosure,
  Button,
  Textarea,
  ModalOverlay,
  HStack,
  Heading,
  ButtonGroup,
  SkeletonText,
  ModalCloseButton,
  extendTheme,
  Flex,
  Select,
  SimpleGrid,
  FormControl,
} from "@chakra-ui/react";

const fontStyles = [
  {
    label: "Text/sm",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/md",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/lg",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/xl",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/2xl",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Text/3xl",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "30px",
      fontStyle: "normal",
      fontWeight: "400"
    }
  },
  {
    label: "Button/sm",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "20px"
    }
  },
  {
    label: "Button/md",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px"
    }
  },
  {
    label: "Button/lg",
    props: {
      fontFamily: "Libre Franklin",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px"
    }
  }
];

const SettingsContext = React.createContext<Settings>({
  performanceMode: false,
  fontStyle: fontStyles[1]
});

const SettingsProvider = SettingsContext.Provider;

const STRINGS = [
  "EgestasMetus.png",
  "Pretium.mpeg",
  "EstQuam.jpeg",
  "Porta.mp3",
  "Nisl.mov",
  "VestibulumVestibulumAnte.avi",
  "Nisi.avi",
  "LuctusCumSociis.xls",
  "NonInterdumIn.ppt",
  "Ultrices.tiff",
  "UtOdioCras.png",
  "PosuereCubilia.ppt",
  "JustoAliquam.xls",
  "OrciLuctusEt.mov",
  "LiberoConvallisEget.avi",
  "LoremQuisqueUt.gif",
  "LectusPellentesqueEget.png",
  "VestibulumAliquet.mp3",
  "PotentiNullam.ppt",
  "SemSed.mp3",
  "FelisSedLacus.avi",
  "AmetEleifendPede.pdf",
  "LacusMorbi.pdf",
  "SapienUt.mp3",
  "FuscePosuereFelis.jpeg",
  "UtSuscipitA.png",
  "Venenatis.mp3",
  "Quam.tiff",
  "OrciPedeVenenatis.pdf",
  "VariusInteger.mp3",
  "ProinInterdumMauris.avi",
  "Felis.gif",
  "Nulla.ppt",
  "EuMassa.txt",
  "PosuereCubilia.avi",
  "Id.pdf",
  "Sapien.avi",
  "EstDonec.mp3",
  "Proin.xls",
  "VestibulumProin.tiff",
  "AnteIpsum.avi",
  "PretiumQuisLectus.tiff",
  "UtBlanditNon.avi",
  "Placerat.xls",
  "Dictumst.mp3",
  "PurusEu.pdf",
  "EnimLeo.mov",
  "Ipsum.xls",
  "IpsumDolorSit.mp3",
  "CongueRisusSemper.xls",
  "Quisque.jpeg",
  "DuisMattisEgestas.jpeg",
  "PulvinarSedNisl.mp3",
  "InLeo.ppt",
  "UtNunc.avi",
  "Mauris.xls",
  "LectusIn.xls",
  "MassaIdNisl.ppt",
  "SedAccumsan.tiff",
  "Ut.mp3",
  "NonVelit.avi",
  "Lorem.ppt",
  "Tincidunt.mp3",
  "Lectus.ppt",
  "VolutpatIn.mp3",
  "Tincidunt.xls",
  "NequeAenean.ppt",
  "Dolor.mp3",
  "AtTurpis.avi",
  "UtOdioCras.xls",
  "NullaQuisqueArcu.ppt",
  "Turpis.tiff",
  "Orci.mpeg",
  "InHacHabitasse.tiff",
  "UtVolutpatSapien.txt",
  "DiamCras.png",
  "Cum.avi",
  "Ante.xls",
  "FelisEuSapien.doc",
  "QuamFringillaRhoncus.tiff",
  "ConsectetuerAdipiscing.mp3",
  "Nam.mov",
  "SodalesSed.avi",
  "MattisEgestas.tiff",
  "CubiliaCuraeMauris.jpeg",
  "Diam.avi",
  "VivamusVestibulumSagittis.avi",
  "Nunc.gif",
  "Sed.jpeg",
  "Nulla.mp3",
  "NullaNunc.gif",
  "Ac.xls",
  "VenenatisTristique.ppt",
  "EnimSitAmet.doc",
  "ElementumPellentesque.mp3",
  "InFelis.xls",
  "VulputateLuctusCum.jpeg",
  "ConvallisMorbi.mov",
  "LeoRhoncus.avi",
  "EleifendDonecUt.xls",
  "LuctusEtUltrices.ppt",
  "Mi.gif",
  "SociisNatoquePenatibus.ppt",
  "HendreritAtVulputate.mp3",
  "SitAmet.xls",
  "CurabiturAtIpsum.txt",
  "Nunc.xls",
  "NecCondimentumNeque.pdf",
  "Platea.xls",
  "Dui.jpeg",
  "ConvallisDuis.xls",
  "In.gif",
  "Semper.mpeg",
  "SitAmet.jpeg",
  "AliquamQuisTurpis.txt",
  "InBlanditUltrices.mp3",
  "Donec.mpeg",
  "NecCondimentumNeque.mp3",
  "SapienQuisLibero.ppt",
  "MattisOdioDonec.avi",
  "Nibh.mp3",
  "VestibulumAliquet.mov",
  "PedeLibero.mp3",
  "LoremVitae.mp3",
  "Vel.xls",
  "PedeJustoEu.ppt",
  "SodalesSedTincidunt.mp3",
  "VitaeNisiNam.mp3",
  "Nisl.mp3",
  "ProinInterdum.tiff",
  "PulvinarLobortis.avi",
  "VariusInteger.tiff",
  "In.mp3",
  "Vulputate.avi",
  "OrciNullam.tiff",
  "Lobortis.png",
  "NonInterdum.mov",
  "Porttitor.tiff",
  "PedeUllamcorper.gif",
  "CondimentumNeque.ppt",
  "MalesuadaIn.avi",
  "CuraeNulla.ppt",
  "Nibh.png",
  "LigulaSuspendisseOrnare.avi",
  "Sit.ppt",
  "SemperSapien.xls",
  "Aliquet.pdf",
  "AtTurpis.mp3",
  "SapienUrnaPretium.jpeg",
  "IntegerAliquetMassa.mp3",
  "NislAeneanLectus.mp3",
  "CrasMiPede.gif",
  "Viverra.ppt",
  "VitaeNisi.mov",
  "VitaeMattisNibh.mp3",
  "TurpisEnim.jpeg",
  "Volutpat.ppt",
  "Integer.ppt",
  "Duis.jpeg",
  "RhoncusAliquet.mp3",
  "Ridiculus.ppt",
  "Faucibus.ppt",
  "MagnaVestibulumAliquet.ppt",
  "IntegerNonVelit.doc",
  "FaucibusOrci.ppt",
  "NisiEuOrci.tiff",
  "InterdumVenenatisTurpis.avi",
  "LobortisConvallisTortor.gif",
  "VivamusTortor.mpeg",
  "TortorId.ppt",
  "EnimSitAmet.mp3",
  "NequeDuisBibendum.txt",
  "MaurisEget.ppt",
  "UtUltricesVel.ppt",
  "MagnisDis.jpeg",
  "QuamSollicitudinVitae.pdf",
  "MassaIdLobortis.ppt",
  "FeugiatNonPretium.doc",
  "TurpisInteger.xls",
  "LacusAt.avi",
  "Duis.tiff",
  "UltricesEnim.jpeg",
  "LiberoQuis.avi",
  "Nisi.avi",
  "Nulla.ppt",
  "NullamSitAmet.mov",
  "InterdumEuTincidunt.mp3",
  "Orci.ppt",
  "ProinLeoOdio.tiff",
  "MorbiNon.ppt",
  "AOdioIn.ppt",
  "ElementumEu.jpeg",
  "MaurisVulputate.avi",
  "Mauris.gif",
  "AugueVestibulum.avi",
  "DonecPharetraMagna.avi",
  "AeneanAuctorGravida.mov",
  "ElitProinRisus.avi",
  "CondimentumCurabitur.pdf",
  "Accumsan.avi",
  "PulvinarLobortis.gif",
  "EgestasMetus.jpeg",
  "InQuis.txt",
  "VariusUt.doc",
  "PedePosuereNonummy.avi",
  "Interdum.ppt",
  "NullaFacilisi.jpeg",
  "CurabiturAtIpsum.gif",
  "AliquetUltricesErat.pdf",
  "AmetConsectetuer.txt",
  "Ornare.txt",
  "Ut.ppt",
  "Consectetuer.pdf",
  "InLectusPellentesque.avi",
  "Pellentesque.jpeg",
  "VelDapibus.xls",
  "ErosVestibulumAc.mp3",
  "FaucibusOrciLuctus.jpeg",
  "AcTellusSemper.ppt",
  "IpsumPrimis.jpeg",
  "Penatibus.mp3",
  "TortorId.gif",
  "Nec.gif",
  "CurabiturConvallisDuis.mp3",
  "LacusAt.avi",
  "Sapien.ppt",
  "Ipsum.avi",
  "LacusPurusAliquet.xls",
  "Sapien.avi",
  "Ante.avi",
  "PortaVolutpat.mp3",
  "SitAmet.mp3",
  "In.gif",
  "HendreritAtVulputate.png",
  "Justo.avi",
  "PotentiNullamPorttitor.avi",
  "Eget.avi",
  "DonecPosuereMetus.avi",
  "PharetraMagna.txt",
  "BlanditUltrices.txt",
  "PraesentBlanditNam.png",
  "NislDuisBibendum.avi",
  "NullamOrci.ppt",
  "ImperdietSapien.mov",
  "Sed.avi",
  "FeugiatEtEros.xls",
  "VivamusVel.mp3",
  "Amet.ppt",
  "VolutpatSapien.png",
  "Molestie.png",
  "Orci.xls",
  "VelPede.xls",
  "Justo.gif",
  "Sapien.tiff",
  "IdTurpisInteger.avi",
  "AmetErosSuspendisse.avi",
  "EratTortorSollicitudin.avi",
  "NullaTempusVivamus.jpeg",
  "Id.xls",
  "Tortor.ppt",
  "Etiam.tiff",
  "LeoOdioPorttitor.xls",
  "Lectus.ppt",
  "FusceCongueDiam.tiff",
  "Ante.ppt",
  "AcEnimIn.doc",
  "Proin.jpeg",
  "Mauris.avi",
  "AdipiscingMolestie.xls",
  "RhoncusAliquam.ppt",
  "SuscipitLigulaIn.mpeg",
  "In.mov",
  "Proin.mov",
  "VelAugueVestibulum.xls",
  "InFaucibusOrci.gif",
  "Phasellus.mp3",
  "UtNunc.mp3",
  "InterdumMauris.png",
  "EtUltricesPosuere.tiff",
  "ErosSuspendisse.avi",
  "EtiamFaucibusCursus.jpeg",
  "PedeMorbiPorttitor.tiff",
  "LacusMorbiQuis.xls",
  "SociisNatoque.xls",
  "LectusPellentesque.ppt",
  "InQuis.mp3",
  "UltriciesEuNibh.pdf",
  "PorttitorPede.avi",
  "LoremVitaeMattis.txt",
  "PurusEu.pdf",
  "In.tiff",
  "VestibulumSagittisSapien.xls",
  "QuisTurpis.doc",
  "Nulla.ppt",
  "Libero.xls",
  "Nulla.txt",
  "AOdio.mp3",
  "JustoEu.gif",
  "Platea.ppt",
  "LeoOdioCondimentum.tiff",
  "Donec.png",
  "SedNislNunc.tiff",
  "OrciLuctusEt.mp3",
  "ArcuAdipiscingMolestie.avi",
  "FelisEu.mp3",
  "FelisUt.mov",
  "VenenatisTurpisEnim.mp3",
  "AcLobortisVel.gif",
  "SedAugue.jpeg",
  "Etiam.mp3",
  "Augue.xls",
  "TempusSemper.jpeg",
  "Tellus.pdf",
  "LeoOdio.avi",
  "AtDolor.mp3",
  "Felis.mp3",
  "TortorRisusDapibus.mp3",
  "Velit.avi",
  "LiberoConvallis.ppt",
  "ANibh.mpeg",
  "PurusEu.mpeg",
  "NonInterdumIn.avi",
  "FaucibusOrci.xls",
  "Imperdiet.doc",
  "CubiliaCuraeDonec.avi",
  "ConvallisEgetEleifend.xls",
  "NuncVestibulum.tiff",
  "AugueVestibulumAnte.mp3",
  "NonVelit.ppt",
  "Dictumst.mp3",
  "MagnaAtNunc.ppt",
  "Posuere.pdf",
  "PulvinarSed.txt",
  "SitAmet.mp3",
  "LaoreetUtRhoncus.mp3",
  "APedePosuere.avi",
  "OdioElementum.txt",
  "Orci.xls",
  "Nam.txt",
  "EgetVulputate.mp3",
  "PorttitorLoremId.ppt",
  "AtNuncCommodo.mpeg",
  "ElitSodales.mp3",
  "SagittisNam.mp3",
  "SuscipitA.mp3",
  "Interdum.tiff",
  "VelIpsumPraesent.mpeg",
  "Velit.xls",
  "Montes.avi",
  "UltricesEratTortor.avi",
  "SedTristiqueIn.doc",
  "Tincidunt.mp3",
  "Cursus.xls",
  "Leo.mov",
  "NuncProin.ppt",
  "LectusAliquam.ppt",
  "UltricesPhasellusId.mp3",
  "UllamcorperAugueA.jpeg",
  "Lacus.tiff",
  "MontesNascetur.mp3",
  "IdMauris.avi",
  "AdipiscingLoremVitae.mp3",
  "Interdum.xls",
  "Donec.jpeg",
  "Interdum.avi",
  "NullaElit.ppt",
  "RutrumNulla.ppt",
  "In.jpeg",
  "SitAmet.gif",
  "Tincidunt.tiff",
  "Lobortis.mpeg",
  "IpsumPrimisIn.mp3",
  "Lectus.tiff",
  "Nascetur.xls",
  "Consequat.tiff",
  "InHac.mov",
  "VulputateVitaeNisl.avi",
  "LoremVitaeMattis.ppt",
  "TristiqueFusceCongue.avi",
  "LeoRhoncusSed.ppt",
  "Ligula.ppt",
  "JustoInHac.txt",
  "Morbi.avi",
  "LuctusEtUltrices.jpeg",
  "AmetConsectetuerAdipiscing.gif",
  "Posuere.jpeg",
  "Ipsum.avi",
  "UltricesAliquetMaecenas.avi",
  "AeneanAuctor.ppt",
  "LectusPellentesqueAt.mp3",
  "DiamInMagna.mp3",
  "PurusPhasellusIn.pdf",
  "VelNulla.avi",
  "Lectus.ppt",
  "SitAmet.ppt",
  "UtMassa.mp3",
  "ErosVestibulum.txt",
  "Turpis.mp3",
  "Tincidunt.mp3",
  "MiInteger.txt",
  "Vitae.avi",
  "BibendumMorbi.pdf",
  "Ultrices.xls",
  "VulputateNonummyMaecenas.jpeg",
  "VariusIntegerAc.ppt",
  "Nunc.mp3",
  "InImperdiet.doc",
  "Aliquet.ppt",
  "IdPretiumIaculis.ppt",
  "MagnisDis.mp3",
  "NullaMollisMolestie.mpeg",
  "EstEt.avi",
  "PotentiIn.gif",
  "Hendrerit.mp3",
  "Rhoncus.xls",
  "PedeLibero.ppt",
  "RidiculusMusVivamus.xls",
  "Elementum.pdf",
  "EuPede.mp3",
  "Ut.avi",
  "CurabiturAt.mp3",
  "Pede.tiff",
  "CongueEgetSemper.txt",
  "IpsumPrimisIn.mpeg",
  "OdioOdio.tiff",
  "NuncVestibulum.tiff",
  "MagnaVestibulumAliquet.txt",
  "InEleifendQuam.mp3",
  "Neque.ppt",
  "Massa.mpeg",
  "Erat.ppt",
  "QuisOrciEget.mp3",
  "VehiculaCondimentum.ppt",
  "Rutrum.tiff",
  "TurpisEget.tiff",
  "OrciMaurisLacinia.avi",
  "PortaVolutpatQuam.gif",
  "LigulaSuspendisse.mov",
  "Suspendisse.mp3",
  "LiberoNullam.mp3",
  "Dolor.ppt",
  "VelLectus.mp3",
  "Porta.avi",
  "HacHabitasse.avi",
  "PulvinarLobortis.mp3",
  "Bibendum.xls",
  "CrasIn.mp3",
  "Tempus.ppt",
  "NibhIn.avi",
  "Et.jpeg",
  "OdioElementumEu.mp3",
  "FacilisiCrasNon.doc",
  "Nulla.jpeg",
  "NullamOrci.ppt",
  "IpsumPraesent.xls",
  "Turpis.tiff",
  "QuamNecDui.ppt",
  "Nulla.mp3",
  "NuncDonec.mpeg",
  "Ullamcorper.avi",
  "RutrumAc.png",
  "Quisque.jpeg",
  "Orci.xls",
  "AmetSemFusce.pdf",
  "Lectus.xls",
  "UltricesPosuere.mp3",
  "Quam.ppt",
  "PlaceratPraesentBlandit.xls",
  "LaoreetUtRhoncus.xls",
  "NuncProinAt.avi",
  "NatoquePenatibusEt.tiff",
  "TinciduntEuFelis.jpeg",
  "TurpisDonecPosuere.mpeg",
  "AIpsumInteger.xls",
  "Convallis.jpeg",
  "Penatibus.png",
  "IaculisJustoIn.ppt",
  "Justo.mov",
  "NequeSapien.gif",
  "IdJustoSit.jpeg",
  "LiberoUt.gif",
  "Mauris.mov",
  "EtiamFaucibusCursus.ppt",
  "Sed.mov",
  "TurpisEgetElit.xls",
  "AliquamQuis.mpeg",
  "InPorttitor.avi",
  "MolestieLorem.jpeg",
  "Felis.xls",
  "PosuereCubilia.txt",
  "SemperEst.mp3",
  "TurpisIntegerAliquet.mov",
  "Habitasse.pdf",
  "VelIpsumPraesent.xls",
  "Lectus.avi",
  "SedSagittis.jpeg",
  "Tempor.mp3",
  "UtAt.jpeg",
  "LaciniaAenean.avi",
  "PlateaDictumstMorbi.avi",
  "AtVelitVivamus.mpeg",
  "AcEst.txt",
  "ProinLeoOdio.ppt",
  "AtFeugiatNon.jpeg",
  "Sapien.tiff",
  "MolestieSed.mp3",
  "NonVelit.ppt",
  "Quam.tiff",
  "ElementumPellentesque.ppt",
  "VelDapibusAt.gif",
  "OdioDonec.xls",
  "NonummyInteger.mp3",
  "Libero.xls",
  "NonVelit.xls",
  "Quam.mp3",
  "NuncProin.mp3",
  "SedTincidunt.doc",
  "EuMagnaVulputate.mp3",
  "SitAmetConsectetuer.txt",
  "EgetMassa.jpeg",
  "Vestibulum.jpeg",
  "Sapien.mp3",
  "SuspendisseOrnare.avi",
  "Cras.avi",
  "A.avi",
  "PlateaDictumst.ppt",
  "IdLuctusNec.tiff",
  "SedAnteVivamus.ppt",
  "AeneanAuctorGravida.xls",
  "GravidaNisi.xls",
  "Id.xls",
  "Leo.mp3",
  "Libero.xls",
  "QuamNecDui.avi",
  "VelitDonec.ppt",
  "PortaVolutpat.mov",
  "Amet.ppt",
  "Diam.jpeg",
  "Scelerisque.avi",
  "Dui.ppt",
  "Nulla.doc",
  "IntegerTinciduntAnte.jpeg",
  "Accumsan.mp3",
  "LiberoQuis.xls",
  "SollicitudinVitae.ppt",
  "DuisBibendumMorbi.mp3",
  "Libero.png",
  "PenatibusEtMagnis.jpeg",
  "SitAmetErat.mp3",
  "VelPedeMorbi.mp3",
  "Iaculis.ppt",
  "Amet.xls",
  "NuncNisl.tiff",
  "Ultrices.mpeg",
  "DictumstMorbi.doc",
  "Vitae.mov",
  "PedeLibero.mp3",
  "NibhIn.xls",
  "SollicitudinVitae.mp3",
  "LoremIntegerTincidunt.png",
  "LacusMorbi.ppt",
  "SitAmetConsectetuer.tiff",
  "DiamNeque.ppt",
  "Pulvinar.mov",
  "Est.png",
  "Luctus.avi",
  "Nam.mp3",
  "IpsumInteger.mp3",
  "HendreritAtVulputate.avi",
  "IpsumPraesent.xls",
  "EnimLoremIpsum.ppt",
  "Eget.mp3",
  "TurpisEnimBlandit.ppt",
  "AdipiscingLoremVitae.mp3",
  "AccumsanFelis.ppt",
  "OdioElementumEu.xls",
  "PraesentBlandit.ppt",
  "QuisJusto.jpeg",
  "VestibulumAcEst.doc",
  "Est.png",
  "Volutpat.xls",
  "Cubilia.avi",
  "EuFelis.ppt",
  "AcTellus.doc",
  "Consectetuer.png",
  "Consequat.txt",
  "EnimLeo.mp3",
  "Et.xls",
  "LaoreetUt.xls",
  "Tempus.mp3",
  "TellusNullaUt.tiff",
  "UtEratId.avi",
  "AuctorGravida.gif",
  "Nam.ppt",
  "AliquamEratVolutpat.tiff",
  "TortorSollicitudin.tiff",
  "ConvallisNuncProin.tiff",
  "VulputateJustoIn.mp3",
  "InterdumEu.mp3",
  "Dui.mp3",
  "SemPraesentId.avi",
  "CursusUrna.avi",
  "DonecPosuereMetus.jpeg",
  "InQuis.xls",
  "ConsequatUt.xls",
  "MattisEgestas.mp3",
  "NuncViverraDapibus.avi",
  "ALibero.png",
  "Eu.ppt",
  "PedeLobortis.ppt",
  "MorbiVestibulum.mp3",
  "NequeSapienPlacerat.avi",
  "LobortisSapienSapien.xls",
  "Pellentesque.txt",
  "PrimisInFaucibus.ppt",
  "Interdum.ppt",
  "Morbi.png",
  "EratVestibulumSed.xls",
  "EratEros.xls",
  "Augue.mp3",
  "SuscipitNullaElit.txt",
  "Imperdiet.ppt",
  "AOdioIn.ppt",
  "Ultrices.mp3",
  "MaurisViverraDiam.tiff",
  "Ut.ppt",
  "VenenatisTurpis.mov",
  "Odio.avi",
  "EtUltrices.mp3",
  "UltricesPosuereCubilia.xls",
  "LiberoNullamSit.ppt",
  "Ultrices.gif",
  "NullamPorttitorLacus.png",
  "Dui.xls",
  "PedeMorbi.jpeg",
  "SemPraesent.mp3",
  "Pulvinar.mp3",
  "Nulla.avi",
  "Nisl.mov",
  "Congue.tiff",
  "Eu.mp3",
  "DuiVel.png",
  "MassaTempor.xls",
  "ScelerisqueMauris.tiff",
  "LectusAliquamSit.avi",
  "Orci.jpeg",
  "EtiamFaucibusCursus.ppt",
  "At.jpeg",
  "LuctusEtUltrices.txt",
  "Lacus.mp3",
  "LigulaNecSem.ppt",
  "Ante.tiff",
  "Porta.mp3",
  "In.avi",
  "VivamusVel.avi",
  "NibhIn.avi",
  "CubiliaCuraeMauris.jpeg",
  "In.jpeg",
  "MolestieLoremQuisque.doc",
  "Pede.pdf",
  "NequeVestibulum.mpeg",
  "AliquamAugue.mpeg",
  "Nonummy.xls",
  "NonVelit.mp3",
  "EratQuisque.ppt",
  "LigulaVehiculaConsequat.xls",
  "AmetDiam.tiff",
  "MassaId.ppt",
  "Quam.xls",
  "Cubilia.ppt",
  "EgetTincidunt.ppt",
  "TempusVel.png",
  "AnteIpsum.mp3",
  "Pede.png",
  "In.tiff",
  "Nibh.mp3",
  "SemperSapienA.tiff",
  "Augue.gif",
  "FusceConsequat.tiff",
  "IntegerAcNeque.avi",
  "DuisBibendumFelis.mpeg",
  "Neque.ppt",
  "AmetLobortis.mov",
  "ElitSodalesScelerisque.mpeg",
  "ElitProin.avi",
  "Dictumst.avi",
  "Neque.mpeg",
  "A.gif",
  "AugueVestibulum.doc",
  "AdipiscingElitProin.ppt",
  "NisiVolutpat.mpeg",
  "Amet.mp3",
  "InHac.xls",
  "InImperdietEt.png",
  "EuMassaDonec.xls",
  "EuMassa.xls",
  "Viverra.mp3",
  "Cursus.avi",
  "TurpisSedAnte.avi",
  "Pretium.ppt",
  "AcNibh.xls",
  "NequeSapien.avi",
  "QuamSuspendissePotenti.xls",
  "SedJustoPellentesque.mp3",
  "A.avi",
  "ProinLeo.xls",
  "PharetraMagna.avi",
  "IdMaurisVulputate.ppt",
  "NullaEget.mov",
  "LoremQuisque.ppt",
  "LiberoNullam.mov",
  "Donec.avi",
  "OrciLuctus.tiff",
  "EtEros.mp3",
  "Nonummy.xls",
  "Consectetuer.mov",
  "VivamusVel.mp3",
  "AugueAliquam.mov",
  "TempusVivamus.ppt",
  "OdioInHac.tiff",
  "Ut.xls",
  "AugueQuamSollicitudin.tiff",
  "QuisAugueLuctus.ppt",
  "Hac.png",
  "Dolor.xls",
  "MagnaVulputate.ppt",
  "Dictumst.mov",
  "VivamusTortorDuis.mp3",
  "TellusNulla.jpeg",
  "IntegerANibh.ppt",
  "AmetErat.mp3",
  "TinciduntEu.tiff",
  "Fermentum.ppt",
  "Ipsum.png",
  "OdioCrasMi.ppt",
  "CommodoPlacerat.doc",
  "Eu.mp3",
  "Dolor.ppt",
  "HabitassePlateaDictumst.ppt",
  "EratVestibulumSed.mpeg",
  "AdipiscingElitProin.doc",
  "InImperdiet.mp3",
  "VivamusVel.avi",
  "DictumstEtiamFaucibus.ppt",
  "LiberoNamDui.mp3",
  "Duis.xls",
  "AeneanLectus.png",
  "Libero.mpeg",
  "Libero.mp3",
  "Ultrices.avi",
  "UltricesPosuereCubilia.xls",
  "VolutpatConvallis.avi",
  "Aliquam.tiff",
  "HabitassePlatea.pdf",
  "EtCommodoVulputate.gif",
  "Risus.xls",
  "ConsectetuerEgetRutrum.png",
  "EuNibhQuisque.ppt",
  "QuisLectusSuspendisse.avi",
  "EtUltricesPosuere.txt",
  "MiNulla.mpeg",
  "ConsectetuerAdipiscingElit.avi",
  "LobortisEstPhasellus.mp3",
  "Id.jpeg",
  "Justo.tiff",
  "NuncNislDuis.mpeg",
  "VestibulumRutrum.tiff",
  "Vitae.tiff",
  "VolutpatSapienArcu.ppt",
  "NullaIntegerPede.tiff",
  "VestibulumAnte.avi",
  "AliquamLacus.xls",
  "DuiLuctus.tiff",
  "Dapibus.png",
  "Pede.txt",
  "QuisquePorta.jpeg",
  "Ante.ppt",
  "Non.mov",
  "VestibulumQuam.txt",
  "HacHabitassePlatea.ppt",
  "ConsequatMetus.xls",
  "OrciPede.avi",
  "VenenatisTristiqueFusce.avi",
  "VelitNecNisi.pdf",
  "Nulla.mp3",
  "SollicitudinUt.tiff",
  "NequeDuisBibendum.txt",
  "LaciniaAeneanSit.ppt",
  "Quam.xls",
  "Duis.xls",
  "Consequat.txt",
  "Lacinia.mov",
  "Porttitor.avi",
  "VulputateElementum.mp3",
  "MassaId.xls",
  "Orci.doc",
  "SapienSapien.xls",
  "PosuereCubiliaCurae.ppt",
  "Quam.tiff",
  "PosuereCubiliaCurae.ppt",
  "Turpis.mp3",
  "ArcuSed.xls",
  "SagittisDuiVel.avi",
  "VitaeMattis.jpeg",
  "InFaucibusOrci.mp3",
  "PosuereCubiliaCurae.avi",
  "OrciEgetOrci.xls",
  "TristiqueTortor.ppt",
  "SociisNatoque.txt",
  "BlanditLaciniaErat.avi",
  "NislNuncRhoncus.jpeg",
  "Fermentum.avi",
  "InFaucibusOrci.xls",
  "Cras.mp3",
  "Id.mov",
  "SuspendissePotenti.mp3",
  "AliquamQuis.avi",
  "InLacus.pdf",
  "Platea.tiff",
  "AdipiscingLorem.xls",
  "Justo.pdf",
  "EgestasMetusAenean.pdf",
  "Ultrices.ppt",
  "TortorDuis.pdf",
  "NislVenenatisLacinia.xls",
  "VitaeNisi.avi",
  "Nulla.ppt",
  "PellentesqueAtNulla.pdf",
  "RisusSemperPorta.mp3",
  "Semper.avi",
  "Fermentum.mp3",
  "ElitProinInterdum.xls",
  "UtSuscipit.ppt",
  "IpsumDolor.ppt",
  "QuamTurpis.jpeg",
  "Sit.ppt",
  "RisusPraesent.jpeg",
  "Nisi.mp3",
  "EratNullaTempus.xls",
  "ConvallisEgetEleifend.gif",
  "AugueA.gif",
  "Ante.xls",
  "MaurisLaoreet.xls",
  "IdMauris.tiff",
  "DiamCrasPellentesque.tiff",
  "VitaeIpsum.png",
  "IdPretiumIaculis.avi",
  "VestibulumAcEst.mp3",
  "VulputateVitaeNisl.xls",
  "NullaSuscipit.doc",
  "PosuereCubiliaCurae.jpeg",
  "Primis.tiff",
  "MiIn.mp3",
  "EtMagnisDis.xls",
  "AcLeo.txt",
  "Est.png",
  "Orci.avi",
  "AtLoremInteger.xls",
  "Aliquet.jpeg",
  "NullaUt.png",
  "PosuereCubiliaCurae.txt",
  "LectusInQuam.gif",
  "AccumsanTortor.ppt",
  "NullaElitAc.ppt",
  "Fermentum.avi",
  "FelisUt.mov",
  "InEst.ppt",
  "SociisNatoque.mp3",
  "LoremQuisque.mp3",
  "Duis.mp3",
  "TristiqueFusce.xls",
  "Erat.ppt",
  "CurabiturInLibero.avi",
  "Eget.mpeg",
  "Molestie.avi",
  "IpsumIntegerA.xls",
  "Turpis.xls",
  "Viverra.mpeg",
  "TristiqueTortor.avi",
  "EstLaciniaNisi.ppt",
  "DiamIn.mov",
  "PretiumQuisLectus.png",
  "NisiAtNibh.xls",
  "InFaucibusOrci.ppt",
  "Praesent.png",
  "LuctusCum.avi",
  "VelAccumsan.mpeg",
  "Mauris.avi",
  "Sem.ppt",
  "ParturientMontes.jpeg",
  "LuctusCumSociis.avi",
  "MaurisLaciniaSapien.xls",
  "Aliquam.mp3",
  "Nulla.mp3",
  "AcTellus.ppt",
  "UltricesLiberoNon.ppt",
  "AdipiscingElit.avi",
  "Donec.doc",
  "MiPedeMalesuada.pdf",
  "SapienUt.ppt",
  "MusVivamusVestibulum.ppt",
  "VestibulumSit.avi",
  "Nibh.mp3",
  "AliquetUltrices.mp3",
  "SedVestibulumSit.tiff",
  "Vulputate.png",
  "Donec.avi",
  "NullaNunc.doc",
  "NuncDonec.doc",
  "Vel.mp3",
  "LoremIpsumDolor.xls",
  "MorbiA.xls",
  "Ante.tiff",
  "Lectus.mp3",
  "AeneanAuctorGravida.mp3",
  "Orci.ppt",
  "AcNibhFusce.xls",
  "SedVelEnim.pdf",
  "ConsequatMetus.png",
  "MaurisLaoreetUt.jpeg",
  "BlanditLaciniaErat.xls",
  "ArcuLibero.avi",
  "Vel.ppt",
  "MolestieHendrerit.avi",
  "Augue.ppt",
  "Nunc.jpeg",
  "Vestibulum.mp3",
  "SollicitudinVitaeConsectetuer.xls",
  "PhasellusId.mp3",
  "OrciVehicula.mp3",
  "DolorMorbi.mpeg",
  "AmetNuncViverra.mp3",
  "Curae.avi",
  "ConsequatMorbiA.avi",
  "PellentesqueVolutpat.mp3",
  "QuamFringilla.avi",
  "SitAmetNulla.xls",
  "Pede.jpeg",
  "SemPraesentId.pdf",
  "CurabiturIn.avi",
  "AccumsanTortor.mov",
  "OrciNullamMolestie.png",
  "Quis.mpeg",
  "Id.mp3",
  "IntegerANibh.ppt",
  "Elementum.tiff",
  "FelisDonecSemper.ppt",
  "LaciniaEget.avi",
  "Quis.tiff",
  "VelAccumsan.xls",
  "LeoRhoncusSed.avi",
  "AuctorGravida.mp3",
  "TempusSemper.avi",
  "Sodales.gif",
  "AdipiscingLoremVitae.avi",
  "NullaIntegerPede.avi",
  "EuNibh.mp3",
  "LuctusEtUltrices.ppt",
  "Purus.xls",
  "Consectetuer.avi",
  "DapibusDolorVel.mov",
  "Vel.gif",
  "FeugiatEt.mp3",
  "SapienALibero.png",
  "UtNunc.ppt",
  "Mattis.ppt",
  "PulvinarSed.mp3",
  "PellentesqueEget.jpeg",
  "Potenti.avi",
  "Morbi.ppt",
  "CurabiturConvallisDuis.ppt",
  "Nisi.xls",
  "At.avi",
  "ALibero.gif",
  "Viverra.ppt",
  "TempusSemper.gif",
  "Sed.jpeg",
  "DiamIdOrnare.ppt",
  "Sed.mp3",
  "LacusAt.pdf",
  "NasceturRidiculusMus.txt",
  "ConvallisMorbiOdio.ppt",
  "Risus.ppt",
  "IntegerPedeJusto.ppt",
  "NullaNunc.pdf",
  "InTemporTurpis.ppt",
  "Justo.avi",
  "Lacinia.ppt",
  "EratFermentum.mov",
  "MontesNasceturRidiculus.tiff",
  "Lorem.xls",
  "Cum.avi",
  "DonecSemper.xls",
  "NonLigulaPellentesque.gif",
  "Dapibus.mov",
  "OrciLuctus.mov",
  "Orci.mp3",
  "UtEratCurabitur.txt",
  "MontesNascetur.ppt",
  "UltricesPosuere.mp3",

];

type Row = {
  id?: string;
  str: string;
  widthPerChar: number;
  width: number;
};

const fonts = {
  default: "'Libre Franklin', sans-serif",
  data: "'Roboto Mono', monospace"
};

const fontSizes = {
  sm: "0.75rem",
  md: "0.875rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.625rem",
  "3xl": "1.825rem"
};

const fontWeights = {
  default: 400,
  medium: 500,
  heavy: 600
};

const lineHeights = {
  sm: "1.25rem",
  md: "1.5rem",
  lg: "1.5rem",
  xl: "1.5rem",
  "2xl": "2rem",
  "3xl": "2.5rem"
};

const typography = { fonts, fontSizes, fontWeights, lineHeights };

const theme = extendTheme({ typography, 
  config: {
    initialColorMode: 'dark',
  }
});

const EditRowsDialog = ({ isOpen, onClose, strings, onUpdateRows }: {
  isOpen: boolean,
  onClose: () => void;
  strings: string[],
  onUpdateRows: (arr: string[]) => void
}) => {
  const initialValue = strings?.join("\n") || "";
  const [newValue, setNewValue] = React.useState<string>(initialValue);

  const splitNewValue: string[] = newValue.split("\n");

  return (
    <Modal
      isOpen={isOpen}
      size="lg"
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          <Heading size="lg">Edit Rows</Heading>
          <Text fontWeight="normal">Add text separated by new line</Text>
        </ModalHeader>
        <Divider />
        <ModalBody as={VStack} align="stretch" p={0}>
          <Textarea
            borderRadius="none"
            px={6}
            borderLeft="0"
            borderRight="0"
            defaultValue={newValue}
            rows={20}
            onChange={(e) => setNewValue(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                onUpdateRows(splitNewValue);
              }}
            >
              Update rows
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function useResizedDimensions(ref: React.RefObject<any>, settings: Settings): number | null {
  // Synchronized state for settings to track if user has updated settings
  const [syncSettings, setSyncSettings] = React.useState(settings);

  // State to store dimensions
  const [width, setWidth] = React.useState(null);

  // Function to measure and update dimensions
  const measureAndUpdate = () => {
    if (ref.current) {
      const width = ref.current.getBoundingClientRect().width;
      setWidth(width);
    }
  };

  React.useEffect(() => {
    // Compare old settings with new settings. If they are different, update dimensions.
    if (JSON.stringify(syncSettings) !== JSON.stringify(settings)) {
      measureAndUpdate();
      setSyncSettings(settings); // Update synchronized settings
    }
  }, [settings, syncSettings]); // Re-run effect when 'settings' changes

  // Initial measurement on mount
  React.useEffect(() => {
    measureAndUpdate();
  }, []);

  return width;
}

type RowProps = {
  str: string;
  logRow: (rowData: Row) => void;
};

const Row = ({ str, logRow }: RowProps) => {
  const settings = React.useContext(SettingsContext);
  const elementRef = React.useRef<any>(null);
  // const dimensions = useDimensions(elementRef);

  const width = useResizedDimensions(elementRef, settings);
  const widthPerChar = width && width / str.length;

  React.useEffect(() => {
    if (widthPerChar && typeof widthPerChar === "number") {
      logRow({
        widthPerChar,
        str,
        width: width
      });
    }
  }, [widthPerChar, width, settings]);

  const textEl = (
    <Text {...settings.fontStyle.props} width="max-content" ref={elementRef}>
      {str}
    </Text>
  );

  if (settings.performanceMode) {
    return textEl;
  } else {
    return (
      <Tr>
        <Td whiteSpace="nowrap">{textEl}</Td>
        <Td textAlign="end">{width && width.toFixed(2)}</Td>
        <Td textAlign="end">{widthPerChar?.toFixed(1)}</Td>
      </Tr>
    );
  }
};

type Analysis = {
  averageStrLength: number;
  averageWidthPx: number;
  medianStrLength?: number;
  medianWidthPx?: number;
  averageWidthPerCharPx: number;
  stdDevWidthPx: number;
  stdDevWidthPerCharPx: number;
  stdDevs1Px: number;
  stdDevs2Px: number;
  stdDevs3Px: number;
  stdDevs4Px: number;
};

const analyzeRows = (rows: Row[]): Analysis => {
  const totalRows = rows.length;

  const totalWidthPx = rows.reduce((acc, row) => acc + row.width, 0);
  const averageWidthPx = totalWidthPx / totalRows;

  const totalStrLength = rows.reduce((acc, row) => acc + row.str.length, 0);
  const averageStrLength = Math.ceil(totalStrLength / totalRows);

  const totalWidthPerCharPx = rows.reduce(
    (acc, row) => acc + row.widthPerChar,
    0
  );

  const averageWidthPerCharPx = totalWidthPerCharPx / totalRows;

  const varianceWidthPx =
    rows.reduce(
      (acc, row) => acc + Math.pow(row.width - averageWidthPx, 2),
      0
    ) / totalRows;
  const stdDevWidthPx = Math.sqrt(varianceWidthPx);

  const varianceWidthPerCharPx =
    rows.reduce(
      (acc, row) => acc + Math.pow(row.widthPerChar - averageWidthPerCharPx, 2),
      0
    ) / totalRows;
  const stdDevWidthPerCharPx = Math.sqrt(varianceWidthPerCharPx);

  return {
    averageStrLength,
    averageWidthPx,
    stdDevWidthPx,
    stdDevs1Px: stdDevWidthPx * 1 + averageWidthPx,
    stdDevs2Px: stdDevWidthPx * 2 + averageWidthPx,
    stdDevs3Px: stdDevWidthPx * 3 + averageWidthPx,
    stdDevs4Px: stdDevWidthPx * 4 + averageWidthPx,
    averageWidthPerCharPx,
    stdDevWidthPerCharPx
  };
};

const DataBar = ({ widthPx, label }: { widthPx: number, label: React.ReactElement }) => {
  return (
    <VStack
      position="relative"
      align="flex-start"
      spacing={0}
      borderRadius="4px"
    >
      <Box
        width={widthPx + "px"}
        transition="width 0.2s ease-in-out"
        color="blue.500"
        borderTop="4px solid"
        borderRadius="100px"
        boxShadow="0 1px 6px -1px"
      />
      <SimpleGrid columns={3} gap={3} width="14em">
        {label}
      </SimpleGrid>
    </VStack>
  );
};

type StDevBarProps = {
  analysis: Analysis,
  sdev: number,
  pctCoverage: number
}

const StDevBar = ({ analysis, sdev, pctCoverage }: StDevBarProps) => {
  const numChars = Math.floor(sdev / analysis.averageWidthPerCharPx);

  return (
    <DataBar
      widthPx={sdev}
      label={
        <>
          <strong>{pctCoverage}%</strong>
          <span>{numChars} chars</span>
          <span>{sdev.toFixed() + "px"}</span>
        </>
      }
    />
  );
};

type FontStyle = {
  label: string;
  props: {
    fontSize: string;
    fontWeight: string;
    fontFamily: string;
  };
};

type Settings = {
  performanceMode: boolean;
  fontStyle: FontStyle;
};

function App() {
  // State
  const [strings, setStrings] = React.useState<string[]>(STRINGS);
  const [rowData, setRowData] = React.useState<any>({});
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [settings, setSettings] = React.useState<Settings>({
    performanceMode: false,
    fontStyle: fontStyles[1]
  });

  // Fn to push row data up to state after a row has been rendered
  const logRow = React.useCallback(
    (id: string, rowData: Row) => {
      setRowData((prev: Row) => ({ ...prev, [id]: rowData }));
    },
    [strings, settings]
  );

  const handleUpdateStyle = React.useCallback((label: string) => {
    const fontStyle = fontStyles.find((fs) => fs.label === label);

    setSettings((settings) => ({
      ...settings,
      fontStyle: fontStyle
    }) as Settings);

    setRowData([]);
  }, []);

  // When the rows have been edited
  const handleUpdateRows = React.useCallback((newStringArr: string[]) => {
    setRowData([]);
    setStrings(newStringArr);
    onClose();
  }, []);

  // Map rowData to an array
  const resultsArr: Row[] = Object.keys(rowData).map((rowKey) => ({
    id: rowKey,
    ...rowData[rowKey]
  }));

  const analysis = analyzeRows(resultsArr);

  return (
    <SettingsProvider value={settings}>
      <EditRowsDialog
        onUpdateRows={handleUpdateRows}
        strings={strings}
        isOpen={isOpen}
        onClose={onClose}
      />
      <VStack as={Center} minHeight="100vh" p={4} align="stretch">
        {/* Controls */}
        <VStack
          align="flex-start"
          spacing={4}
          sx={{
            backdropFilter: "blur(32px)"
          }}
          boxShadow="
            inset 0 0 20px 20px var(--chakra-colors-chakra-body-bg),
            inset 0 0 0 2px #ffffff50,
            0 0 1px #00000050,
            0 8px 12px #00000011
          "
          p={6}
          borderRadius="8px"
          position="sticky"
          overflow="hidden"
          top={4}
        >
          <HStack
            position="relative"
            px={6}
            py={1}
            margin={-6}
            mb={2}
            alignSelf="stretch"
            width="auto"
            bottom="auto"
            _after={{
              content: "''",
              position: "absolute",
              height: "1px",
              bottom: 0,
              left: 0,
              right: 0,
              opacity: 0.05,
              bg: "black"
            }}
          >
            <Heading opacity={0.7} fontSize="14px">
              Measure Text Width
            </Heading>
            <Text opacity={0.7} fontSize="14px">
              Find the best width for a set of text
            </Text>
          </HStack>
          <Box
            position="absolute"
            borderRadius="inherit"
            inset={0}
            zIndex={-1}
            as="svg"
            width="100%"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="30.0"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect
              width="100%"
              opacity="0.25"
              height="100%"
              filter="url(#noiseFilter)"
            />
          </Box>

          <HStack
            justifyContent="space-between"
            alignSelf="stretch"
            alignItems="flex-start"
          >
            <SkeletonText
              isLoaded={!!analysis.averageStrLength}
              minWidth="50%"
              spacing={8}
              noOfLines={4}
              skeletonHeight={4}>
              <VStack align="flex-start" spacing={4} flex={1}>
                <DataBar
                  widthPx={analysis.averageWidthPx}
                  label={
                    <>
                      <strong>Average</strong>
                      <span>{analysis.averageStrLength} chars</span>
                      <span>{analysis.averageWidthPx.toFixed()}px</span>
                    </>
                  }
                />
                <StDevBar
                  analysis={analysis}
                  pctCoverage={68}
                  sdev={analysis.stdDevs1Px}
                />
                <StDevBar
                  analysis={analysis}
                  pctCoverage={95}
                  sdev={analysis.stdDevs2Px}
                />
                <StDevBar
                  analysis={analysis}
                  pctCoverage={99.7}
                  sdev={analysis.stdDevs3Px}
                />
              </VStack>
            </SkeletonText>

            <Flex
              gap={2}
              minWidth="8em"
              alignItems="stretch"
              flexDirection="column"
              whiteSpace="nowrap"
            >
              <Button flexShrink={0} colorScheme="blue" onClick={onOpen}>
                Edit Rows
              </Button>
              <FormControl>
                <Select
                  variant='filled'
                  flexShrink={0}
                  defaultValue={settings.fontStyle.label}
                  onChange={(e) => handleUpdateStyle(e.target.value)}
                >
                  {fontStyles.map((fs) => (
                    <option key={fs.label} value={fs.label}>{fs.label}</option>
                  ))}
                </Select>
              </FormControl>
            </Flex>
          </HStack>
        </VStack>

        {settings.performanceMode ? (
          <VStack align="flex-start" p={6} spacing={7}>
            {strings.map((str, index) => {
              const key = str + index;
              return (
                <Row
                  str={str}
                  key={key}
                  logRow={(rowData) => logRow(key, rowData)}
                />
              );
            })}
          </VStack>
        ) : (
          <Table margin="auto" width="100%" variant="simple">
            <Thead>
              <Tr>
                <Th>String</Th>
                <Th textAlign="end">Width</Th>
                <Th textAlign="end">Per char</Th>
              </Tr>
            </Thead>
            <Tbody>
              {strings.map((str, index) => {
                const key = str + index;
                return (
                  <Row
                    str={str}
                    key={key}
                    logRow={(rowData) => logRow(key, rowData)}
                  />
                );
              })}
            </Tbody>
          </Table>
        )}
      </VStack>
    </SettingsProvider>
  );
}

export default App;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
