import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title = "GOOGLE-PAY-DEMO"
  PaymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '1.10',
      currencyCode: 'USD',
      countryCode: 'US'
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };
  onLoadPaymentData(event:Event):void {
    const eventdetails=event as CustomEvent<google.payments.api.PaymentData>
    console.log('load payment data', eventdetails.detail);
  }

  onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
    paymentData
  )=>{
    console.log('load payment data', paymentData);
    return{
      transactionState:'SUCCESS'
    }
  }
  onError=(event: ErrorEvent):void=> {
    console.log('error', event.error);
    }
}
