import { Selector } from 'testcafe';

const dataSet = require('./dataAmarillo.json');

fixture `Vertical Amarillo USA`
    .page `http://192.168.71.11/Onboard/es?agenteEvolution=100000781`;


dataSet.forEach(data => {
    test('varNan-Esp_Amarillo', async t => {
        await t
            .typeText(Selector('.form-control.input-sm').nth(2), data.mail)
            .click('.btn.btn-success')
            .click('#basic-addon1')
            .click(Selector('#basic-addon1 option').withText(data.necesidad))
            .click('#tratamiento_reproducci_n_asistida')
            .click(Selector('#tratamiento_reproducci_n_asistida option').withText(data.tratamientos))
            .click('#tiempo_buscando_tener_bebe')
            .click(Selector('#tiempo_buscando_tener_bebe option').withText(data.tiempoBuscando))
            .click('#en_cuanto_tiempo_te_gustaria_tu_bebe')
            .click(Selector('#en_cuanto_tiempo_te_gustaria_tu_bebe option').withText('Menos de 1 año'))
            .click('#tipoReferidor')
            .click(Selector('#tipoReferidor option').withText(data.tipoReferidor))
            .typeText(Selector('#referidor').nth(1), 'prueba recomendado')
            .click(Selector('label').withText('¿Cómo te llamas?'))
            .typeText('#nombre', 'prueba')
            .pressKey('tab')
            .typeText('#apellido', 'paterno')
            .pressKey('tab')
            .typeText('#materno', 'materno')
            .pressKey('tab')
            //.typeText('#datepicker', '1999-05-05')
            .typeText('#datepicker',data.BirthdayShe)
            .pressKey('enter')
            .click('#codigo_pais')
            .click(Selector('#codigo_pais option').withText(data.codigoPais))
            .typeText('#telefono_whatsapp', '5511223344')
            .click('#idPais')
            .click(Selector('#idPais option').withText(data.idPais))
            .click('#idSucursalUsa')
            .click(Selector('#idSucursalUsa option').withText(data.idSucursal))
            .click(Selector('.btn.btn-primary').nth(1))
            .click('#paisResidencia')
            .click(Selector('#paisResidencia option').withText(data.paisResidencia))
            .typeText('#inputCP', '92705')
            //.typeText('#inputCP', data.codigoPostal)
            //.click('#medio_transporte')
            .pressKey('tab')
            .click(Selector('#medio_transporte option').withText(data.transporte))
            .click('#a_que_te_dedicas')
            .click(Selector('#a_que_te_dedicas option').withText(data.aQueQueDedicas))        
            .click('#tarjeta')
            .click(Selector('#tarjeta option').withText(data.tarjetaCredito))
            .click('#selectEstadoCivil')
            .click(Selector('#selectEstadoCivil option').withText(data.estadoCivil))
            .click('#numeros_partos')
            .click(Selector('#numeros_partos option').withText(data.numerosPartos))
            .typeText('#nombrePareja', 'prueba')
            .pressKey('tab')
            .typeText('#apellidoPareja', 'prueba')
            .pressKey('tab')
            .typeText('#apellidoParejaMaterno', 'prueba')
            // .click('#datepicker-partner')
            .pressKey('tab')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .pressKey('backspace')
            .typeText('#datepicker-partner', '1999-08-02')
            .pressKey('tab')
            .click('#ocupacionPareja')
            .click(Selector('#ocupacionPareja option').withText(data.ocupacionPareja))
            .click('#compromisoPareja')
            .click(Selector('#compromisoPareja option').withText('Medio'))
            .click(Selector('.btn.btn-primary.pull-left').nth(1))
    
    });
});
