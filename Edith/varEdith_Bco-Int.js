import { Selector } from 'testcafe';

const dataSet = require('./variablesIntermedioBlanco.json');

fixture `varEdith_Bco-Int`
    .page `http://192.168.71.11/Onboard/es?agenteEvolution=100000781`;

dataSet.forEach(dataIntermedio => {
    test('varEdith_Bco-Int', async t => {
        await t
            .typeText(Selector('.form-control.input-sm').nth(2), dataIntermedio.mail)
            .click('.btn.btn-success')
            .click('#basic-addon1')
            .click(Selector('#basic-addon1 option').withText(dataIntermedio.necesidad))
            .click('#tratamiento_reproducci_n_asistida')
            .click(Selector('#tratamiento_reproducci_n_asistida option').withText(dataIntermedio.tratamientos))
            .click('#tiempo_buscando_tener_bebe')
            .click(Selector('#tiempo_buscando_tener_bebe option').withText(dataIntermedio.tiempoBuscando))
            .click('#en_cuanto_tiempo_te_gustaria_tu_bebe')
            .click(Selector('#en_cuanto_tiempo_te_gustaria_tu_bebe option').withText('Menos de 1 año'))
            // .click('#tipoReferidor')
            // .click(Selector('#tipoReferidor option').withText(dataIntermedio.tipoReferidor))
            // .typeText(Selector('#referidor').nth(1), 'prueba recomendado')
            .click('#tipoReferidor')
            .click(Selector('#tipoReferidor option').withText(dataIntermedio.tipoReferidor))
            .click('#como_nos_conociste')
            .click(Selector('#como_nos_conociste option').withText('Redes sociales'))
            .click(Selector('label').withText('¿Cómo te llamas?'))
            .typeText('#nombre', 'prueba')
            .pressKey('tab')
            .typeText('#apellido', 'paterno')
            .pressKey('tab')
            .typeText('#materno', 'materno')
            .pressKey('tab')
            //.typeText('#datepicker', '1999-05-05')
            .typeText('#datepicker',dataIntermedio.BirthdayShe)
            .pressKey('enter')
            .click('#codigo_pais')
            .click(Selector('#codigo_pais option').withText(dataIntermedio.codigoPais))
            .typeText('#telefono_whatsapp', '5511223344')
            .click('#idPais')
            .click(Selector('#idPais option').withText(dataIntermedio.idPais))
            .click('#idSucursalUsa')
            .click(Selector('#idSucursalUsa option').withText(dataIntermedio.idSucursal))
            .click(Selector('.btn.btn-primary').nth(1))
            .click('#paisResidencia')
            .click(Selector('#paisResidencia option').withText(dataIntermedio.paisResidencia))
            //.typeText('#inputCP', '92705')
            .typeText('#inputCP', dataIntermedio.codigoPostal)
            .click('#medio_transporte')
            .click(Selector('#medio_transporte option').withText(dataIntermedio.transporte))
            .click('#a_que_te_dedicas')
            .click(Selector('#a_que_te_dedicas option').withText(dataIntermedio.aQueQueDedicas))        
            .click('#tarjeta')
            .click(Selector('#tarjeta option').withText(dataIntermedio.tarjetaCredito))
            .click('#numeros_partos')
            .click(Selector('#numeros_partos option').withText(dataIntermedio.numerosPartos))
            .click(Selector('.btn.btn-primary.pull-left').nth(1))
    
    });
});

